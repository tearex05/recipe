import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMeal } from "../services/api";

const RecipePage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMeal(id);
      setMeal(data?.meals?.[0]);
    };
    fetchData();
  }, [id]);

  const renderIngredientsList = (meal) => {
    const items = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        items.push(
          <li key={i} className="mb-1">
            {measure} {ingredient}
          </li>
        );
      }
    }

    return (
      <ul className="list-disc list-inside text-gray-300 mb-6">{items}</ul>
    );
  };

  // Split instructions by line breaks or by period+space into paragraphs
  const renderInstructions = (instructions) => {
    if (!instructions) return null;

    // Try splitting by line breaks first
    const lines = instructions
      .split(/\r\n|\n/)
      .filter((line) => line.trim() !== "");

    // If no line breaks, split by '. ' instead
    const paragraphs =
      lines.length > 1
        ? lines
        : instructions.split(". ").filter((p) => p.trim() !== "");

    return paragraphs.map((text, i) => (
      <p key={i} className="text-gray-200 mb-4">
        {text.trim()}
        {text.endsWith(".") ? "" : "."}
      </p>
    ));
  };

  if (!meal) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="bg-darkbg text-white min-h-screen p-9">
      <Link to="/" className="text-primary hover:underline mb-6 inline-block">
        &larr; Back to Recipes
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-4">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      {renderIngredientsList(meal)}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions</h2>
      {renderInstructions(meal.strInstructions)}

      {meal.strYoutube && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Instructions Video:</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg"
              src={`https://www.youtube.com/embed/${
                meal.strYoutube.split("v=")[1]
              }`}
              title={meal.strMeal}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <p className="text-center text-gray-500 mt-12 mb-6">Made By RZA.</p>
    </div>
  );
};

export default RecipePage;
