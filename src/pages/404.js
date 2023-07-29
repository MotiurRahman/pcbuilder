import { useRouter } from "next/router";
import React from "react";

const customError = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 1000);
  return (
    <h1 className="flex items-center justify-center h-[100vh]">
      404 - Page Not Found
    </h1>
  );
};

export default customError;
