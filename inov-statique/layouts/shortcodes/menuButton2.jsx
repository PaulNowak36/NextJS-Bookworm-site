"use client";

import Link from "next/link";

const MenuButton2 = () => {
  return (
    <Link href="/projets">
      <img
        src="/images/scanner2.jpg"
        alt="my image"
        className="p-4 bg-blue-300 rounded-xl border-blue-500 border-2 hover:bg-blue-500 transition cursor-pointer"
      />
    </Link>
  );
};

export default MenuButton2;