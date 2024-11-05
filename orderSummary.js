const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "your_database_name",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});
app.post("/submit-order", (req, res) => {
    const { cartItems, totalPrice } = req.body;
  
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "No items in the cart" });
    }
  
    // Prepare order data for insertion
    cartItems.forEach((item) => {
      const title = item.title;
      const quantity = item.quantity;
      const total_price = Number(item.price.replace(/\$/g, "")) * quantity;
      const all_total_price = totalPrice;
  
      // SQL query to insert order data into the table
      const sql =
        "INSERT INTO order_summary (title, quantity, total_price, all_total_price) VALUES (?, ?, ?, ?)";
  
      db.query(
        sql,
        [title, quantity, total_price, all_total_price],
        (err, result) => {
          if (err) {
            console.error("Error inserting order summary:", err);
            return res.status(500).json({ error: "Failed to submit order" });
          }
        }
      );
    });
  
    res.status(200).json({ message: "Order submitted successfully!" });
  });
  const PORT = 8001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
    