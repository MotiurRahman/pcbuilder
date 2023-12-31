import React from "react";
import ProductRating from "./FeatiredProduct/ProductRating";

const Reviews = ({ review }) => {
  const { username, rating, comment } = review;
  console.log("username", username);
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">{username}</h1>
          <p className="py-6">{comment}</p>
          <ProductRating rating={rating}></ProductRating>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
