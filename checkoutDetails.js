const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
const PORT = 8000;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',  // Update with your DB host
  user: 'root',       // Update with your DB username
  password: 'root',   // Update with your DB password
  database: 'shoemakers_db'  // Update with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

// Route to handle the form submission
app.post('/checkout', (req, res) => {
  const {
    name,
    email_address,
    street_address,
    city,
    state,
    phone_number,
    postal_code,
    order_items  // order_items is an array containing items with title, quantity, total_price
  } = req.body;

  // SQL query to insert user checkout details into user_checkout_details table
  const userDetailsSql = `INSERT INTO user_checkout_details 
                          (name, email_address, street_address, city, state, phone_number, postal_code) 
                          VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(userDetailsSql, [name, email_address, street_address, city, state, phone_number, postal_code], (err, result) => {
    if (err) {
      console.error('Error inserting user details:', err);
      return res.status(500).send('An error occurred while processing user details.');
    }

    // Calculate total for all items
    let all_total_price = 0;

    // Prepare an array of promises for inserting order items
    const orderPromises = order_items.map((item) => {
      const { title, quantity, price } = item;  // Adjusting to your data structure

      // Parse price to float by removing the dollar sign
      const total_price = parseFloat(price.replace('$', '')) * quantity;
      all_total_price += total_price;

      const orderSummarySql = `INSERT INTO order_summary (title, quantity, total_price, all_total_price)
                               VALUES (?, ?, ?, ?)`;

      return new Promise((resolve, reject) => {
        db.query(orderSummarySql, [title, quantity, total_price, all_total_price], (err) => {
          if (err) {
            console.error('Error inserting order summary:', err);
            reject('An error occurred while processing order summary.');
          } else {
            resolve();
          }
        });
      });
    });

    // Wait for all order item insertions to complete
    Promise.all(orderPromises)
      .then(() => {
        // Send success response
        res.status(200).send('Order details and summary stored successfully.');
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
