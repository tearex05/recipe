import { Link } from "react-router-dom";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Recipes from "../components/Recipes";
import { useState } from "react";
import { byMainIngredient } from "../services/api";

const Home = () => {
  const [meals, setMeals] = useState([]);

  return (
    <>
      <div className="bg-darkbg text-white min-h-screen pb-12">
        <Navbar />
        <Search setMeals={setMeals} />
        <Recipes meals={meals} />
        <p className="text-center text-gray-500 mt-12 mb-6">Made By RZA.</p>
      </div>
    </>
  );
};

export default Home;
