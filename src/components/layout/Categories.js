import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <ul className="p-2 z-10">
      <li>
        <Link href="/category/cpu">CPU / Processor</Link>
      </li>
      <li>
        <Link href="/category/motherboard">Motherboard</Link>
      </li>
      <li>
        <Link href="/category/ram">RAM</Link>
      </li>
      <li>
        <Link href="/category/powersupply">Power Supply Unit</Link>
      </li>
      <li>
        <Link href="/category/storage">Storage Device</Link>
      </li>
      <li>
        <Link href="/category/monitor">Monitor</Link>
      </li>
      <li>
        <Link href="/category/others">Others</Link>
      </li>
    </ul>
  );
};

export default Categories;
