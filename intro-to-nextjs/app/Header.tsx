import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500 flex gap-1">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-md">
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-md"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-white text-blue-500 rounded-md"
      >
        Search
      </Link>
    </div>
  );
};

export default Header;
