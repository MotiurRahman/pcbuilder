import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import ProductRating from "./ProductRating";
import { Router } from "next/router";
import { useRouter } from "next/router";

const FeaturedProductCard = ({ product }) => {
  const { _id, image, productName, category, price, status, individualRating } =
    product;
  const router = useRouter();

  const productDetails = (id) => {
    router.push(`products/${id}`);
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => {
        productDetails(_id);
      }}
    >
      <figure>
        <img src={`/images/products/${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}!
          <div className="badge badge-secondary">
            <FaBangladeshiTakaSign /> {price}
          </div>
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="flex flex-row justify-between">
          <div className="badge badge-outline">
            <BiCategory /> {category}
          </div>
          <div className="badge badge-outline">{status}</div>
        </div>
        <div className="flex justify-end items-center">
          <ProductRating rating={individualRating}></ProductRating>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
