export const getMeal = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`);
    const data = await response.json();
    return data;
}

export const byMainIngredient = async (query) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
  const data = await response.json();
  return data;
};