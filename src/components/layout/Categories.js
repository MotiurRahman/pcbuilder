import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <ul className="p-2 z-10">
      <li>
        <Link href="/categories/cpu">CPU / Processor</Link>
      </li>
      <li>
        <Link href="/categories/motherboard">Motherboard</Link>
      </li>
      <li>
        <Link href="/categories/ram">RAM</Link>
      </li>
      <li>
        <Link href="/categories/powersupply">Power Supply Unit</Link>
      </li>
      <li>
        <Link href="/categories/storage">Storage Device</Link>
      </li>
      <li>
        <Link href="/categories/monitor">Monitor</Link>
      </li>
      <li>
        <Link href="/categories/others">Others</Link>
      </li>
    </ul>
  );
};

export default Categories;
