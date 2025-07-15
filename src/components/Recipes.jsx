import RecipeCard from "./RecipeCard";

const Recipes = ({ meals }) => {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {meals.map((meal) => (
        <RecipeCard meals={meals} key={meal["idMeal"]} meal={meal} />
      ))}
    </section>
  );
};

export default Recipes;
