import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import ProductRating from "./ProductRating";
import { Router } from "next/router";
import { useRouter } from "next/router";

const FeaturedProductCard = ({ product }) => {
  const { Image, ProductName, Category, Price, Status, Rating } = product;
  const router = useRouter();

  const productDetails = (product) => {
    router.push(`products/${product}`);
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => {
        productDetails(ProductName);
      }}
    >
      <figure>
        <img src={`/images/products/${Image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {ProductName}!
          <div className="badge badge-secondary">
            <FaBangladeshiTakaSign /> {Price}
          </div>
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="flex flex-row justify-between">
          <div className="badge badge-outline">
            <BiCategory /> {Category}
          </div>
          <div className="badge badge-outline">{Status}</div>
        </div>
        <div className="flex justify-end items-center">
          <ProductRating rating={Rating}></ProductRating>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
