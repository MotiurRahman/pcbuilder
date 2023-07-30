import Image from "next/image";
import { Inter } from "next/font/google";
import FeaturedProductCard from "@/components/FeatiredProduct/FeaturedProductCard";
import ProductCategory from "@/components/ProductCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Products, Categorys }) {
  return (
    <div className="mt-5 mb-15">
      <div className="mt-5 flex items-center justify-center flex-col">
        <h1 className="text-2xl">Featured Products</h1>
        <p>Check & Get Your Desired Product!</p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-4">
        {Products.map((product) => (
          <FeaturedProductCard
            key={product._id}
            product={product}
          ></FeaturedProductCard>
        ))}
      </div>

      <section className="mt-10 mb-10">
        <div className="mt-5 flex items-center justify-center flex-col">
          <h1 className="text-2xl">Featured Category</h1>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {Categorys.map((category, index) => (
            <ProductCategory key={index} category={category}></ProductCategory>
          ))}
        </div>
      </section>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/pcbuilder");
//   const products = await res.json();
//   // console.log(products);
//   return { props: { Products: products.data } };
// };

export async function getStaticProps() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("http://localhost:3000/api/pcbuilder"),
      fetch("http://localhost:3000/api/all_categories"),
    ]);

    const products = await response1.json();
    const category = await response2.json();

    return {
      props: { Products: products.data, Categorys: category.data },
      //  revalidate: 3600, // Optional: Time in seconds to revalidate (cache revalidation)
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { data1: {}, data2: {} },
    };
  }
}
