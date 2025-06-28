import React from "react";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FeaturedCompanies from "../components/FeaturedCompanies";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import CategoryProduct from "../components/CategoryProduct";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <>
      <div className="mx-auto">
        <Banner />
        <div className="max-w-[1200px] mx-auto">
          <FeaturedCompanies />
          <CategoryProduct category="men's clothing" />
          <CategoryProduct category="jewelery"/>
          <CategoryProduct category="electronics"/>
          <CategoryProduct category="women's clothing"/>
        </div>
      </div>
    </>
  );
};

export default Home;
