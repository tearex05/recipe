import React, { useRef } from "react";
import { byMainIngredient } from "../services/api";

const Search = ({ setMeals }) => {
  const valueRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const results = await byMainIngredient(valueRef.current.value);
    setMeals(results.meals);
  };

  return (
    <>
      <section className="text-center mt-2">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Search for Recipes
        </h2>
      </section>
      <section className="max-w-2xl mx-auto px-4">
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            ref={valueRef}
            type="text"
            placeholder="Search by ingredient or recipe..."
            className="flex-grow p-3 rounded bg-darkcard text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-black px-5 py-3 rounded hover:bg-yellow-400 transition"
          >
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default Search;
