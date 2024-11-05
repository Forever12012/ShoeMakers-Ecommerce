import { react } from "react";
import Header from "./Header";
import SaleBanner from "./SaleBanner";
import Swiper1 from "./Swiper1";
import Banner2 from "./Banner2";
import ProductList from "./ProductList";
import ProductList2 from "./ProductList2";
import Banner3 from "./Banner3";
import ProductList3 from "./ProductList3";
import CustomerRewies from "./CustomerRewies";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div id="home">
        <SaleBanner />
        <Swiper1 />
        <Banner2 />
        <ProductList />
        <ProductList2 />
        <Banner3 />
        <ProductList3 />
        <CustomerRewies />
        <Footer />
      </div>
    </>
  );
};

export default Home;
