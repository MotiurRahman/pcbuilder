import React from "react";
import { useRouter } from "next/router";
import Reviews from "./Reviews";

const ProductDeatils = ({ productDetails }) => {
  const {
    image,
    productName,
    category,
    status,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = productDetails;

  console.log("reviews", reviews);

  const { Brand, Model } = keyFeatures;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`/images/products/${image}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {productDetails?.productName}
            </h1>
            <p className="p-2">Category:{productDetails?.category}</p>
            <p className="p-2">Status:{productDetails?.status}</p>
            <p className="p-2">Price:{productDetails?.price}</p>
            <p className="p-2">Description:{productDetails?.description}</p>
            <p className="p-2">
              Key Features: Brand: {Brand}, Model: {Model}
            </p>
            <p className="p-2">
              Individual Rating : {productDetails?.individualRating}
            </p>
            <p className="p-2">
              Average Rating : {productDetails?.averageRating}
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
              {reviews.map((review, index) => (
                <Reviews key={index} review={review}></Reviews>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;

export async function getStaticPaths() {
  // Generate the paths for all product IDs
  const all_products = await fetch("http://localhost:3000/api/products");
  const res = await all_products.json();
  const products = res.data;
  const paths = products.map((product) => ({
    params: { productDetails: product._id },
  }));

  // Return the paths to Next.js
  return {
    paths,
    fallback: false, // Or "blocking" or "true" depending on your use case
  };
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const product = await fetch(
      `http://localhost:3000/api/products/${params?.productDetails}`
    );
    const productDetailsData = await product.json();

    console.log("productDetailsData", productDetailsData.data[0]);
    return {
      props: { productDetails: productDetailsData.data[0] },
      //  revalidate: 3600, // Optional: Time in seconds to revalidate (cache revalidation)
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { productDetails: {} },
    };
  }
}
