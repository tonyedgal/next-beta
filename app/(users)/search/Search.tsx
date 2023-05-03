"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <>
      {/**
       * Trick to get event type is to
       * onSubmit={e => handleSearch}
       * and hover over the event
       */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter the Search Term"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
