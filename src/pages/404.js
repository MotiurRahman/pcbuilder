"use client";
import React from "react";
import Router from "next/router";

const customError = () => {
  setTimeout(() => {
    typeof window === undefined && Router.push("/");
  }, 1000);
  return (
    <h1 className="flex items-center justify-center h-[100vh]">
      404 - Page Not Found
    </h1>
  );
};

export default customError;
