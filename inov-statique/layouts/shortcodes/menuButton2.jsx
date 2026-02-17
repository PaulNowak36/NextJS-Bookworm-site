"use client";

import Link from "next/link";
import withBasePath from "@lib/utils/basePath";

const MenuButton2 = ({ href, color, src, height, width, children }) => {
  const resolvedSrc = withBasePath(src);

  return (
    <Link href={href} target="_self">
      <div
        className="relative inline-block"
        style={{ width, height, display: "inline-block" }}
      >
        <img
          src={resolvedSrc}
          alt="my image"
          className={`p-3 w-full h-full object-content ${color} transition rounded-xl cursor-pointer`}
        />

        <div className="absolute inset-x-0 bottom-5 flex items-center justify-center pointer-events-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default MenuButton2;