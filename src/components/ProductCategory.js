import { useRouter } from "next/router";

const ProductCategory = ({ category }) => {
  const router = useRouter();
  const handleProductCategory = (category) => {
    router.push(`category/${category}`);
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => {
        handleProductCategory(category);
      }}
    >
      <figure className="px-10 pt-10">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category}!</h2>
      </div>
    </div>
  );
};

export default ProductCategory;
