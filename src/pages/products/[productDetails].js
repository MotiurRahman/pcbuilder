import React from "react";
import { useRouter } from "next/router";

const ProductDeatils = (req, res) => {
  const router = useRouter();
  const { productDetails } = router.query;
  return (
    <div>
      <h1>{productDetails}</h1>
    </div>
  );
};

export default ProductDeatils;
