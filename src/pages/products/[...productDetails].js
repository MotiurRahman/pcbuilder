import React from "react";
import { useRouter } from "next/router";

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
  console.log("productName", productName);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`/images/products/${image}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{productName}</h1>
            <p className="p-2">Category:{category}</p>
            <p className="p-2">Status:{status}</p>
            <p className="p-2">Price:{price}</p>
            <p className="p-2">Description:{description}</p>
            <p className="p-2">Key Features:</p>
            <p className="p-2">Individual Rating :</p>
            <p className="p-2">Average Rating :</p>
            <p className="p-2">Reviews:</p>
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
    params: { productDetails: [product._id] },
  }));

  // Return the paths to Next.js
  return {
    paths,
    fallback: false, // Or "blocking" or "true" depending on your use case
  };
}

export async function getStaticProps(context) {
  try {
    //const router = useRouter();
    const { productDetails } = context.params;
    console.log("productDetails", productDetails);
    const product = await fetch(
      `http://localhost:3000/api/products/${productDetails}`
    );
    const productDetailsData = await product.json();

    console.log("productDetailsData", productDetailsData.data);
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
