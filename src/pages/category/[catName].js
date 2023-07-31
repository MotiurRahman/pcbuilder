import FeaturedProductCard from "@/components/FeatiredProduct/FeaturedProductCard";
import { useRouter } from "next/router";
import React from "react";

const productCategory = ({ categoryProduct }) => {
  //   const router = useRouter();
  //   const catName = router.query.catName;
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
      {categoryProduct.map((product) => (
        <FeaturedProductCard
          key={product._id}
          product={product}
        ></FeaturedProductCard>
      ))}
    </div>
  );
};

export default productCategory;

export const getStaticPaths = async () => {
  // Generate the paths for all product IDs
  const all_products = await fetch("http://localhost:3000/api/products");
  const res = await all_products.json();
  const products = res.data;
  const paths = products.map((product) => ({
    params: { catName: product._id },
  }));

  // Return the paths to Next.js
  return {
    paths,
    fallback: "blocking", // Or "blocking" or "true" depending on your use case
  };
};

export const getStaticProps = async (context) => {
  try {
    const { params } = context;
    const product = await fetch(
      `http://localhost:3000/api/category/${params?.catName}`
    );
    const categoryProduct = await product.json();

    console.log("categoryProduct", categoryProduct.data);
    return {
      props: { categoryProduct: categoryProduct.data },
      //  revalidate: 3600, // Optional: Time in seconds to revalidate (cache revalidation)
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { categoryProduct: {} },
    };
  }
};
