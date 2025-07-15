import { useState, useEffect } from "react";
import { getMeal } from "../services/api";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal, meals }) => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await getMeal(meal.idMeal);
      setIngredients(data); // set your fetched data here
    };
    fetchIngredients();
  }, [meals]);

  console.log(ingredients);

  return (
    <div className="bg-darkcard rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={meal.strMealThumb}
        alt="Spaghetti"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">{meal.strMeal}</h3>
        <p className="text-gray-300 text-sm">
          Ingredients: {ingredients?.meals?.[0]?.strIngredient1},{" "}
          {ingredients?.meals?.[0]?.strIngredient2},{" "}
          {ingredients?.meals?.[0]?.strIngredient3}
        </p>
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="block mt-3 text-primary font-medium hover:underline"
        >
          See the recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
