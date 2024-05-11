import React, { useState } from "react";

export function Recetario() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Aceite",
    "Cebolla",
    "Patata",
    "Arroz",
    "Huevo",
    "Garbanzos",
  ]);

  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeContent, setNewRecipeContent] = useState("");

  function handleSearch(event) {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  }

  function handleSuggestClick(suggest) {
    setSearch(suggest);
  }

  function handleSearchButtonClick() {
    setSearch(newRecipeName);
  }

  function handleCreateRecipe() {
    if (newRecipeName.trim() !== "" && newRecipeContent.trim() !== "") {
      const newRecipe = {
        id: recipes.length + 1,
        name: newRecipeName,
        content: newRecipeContent,
      };
      setRecipes([...recipes, newRecipe]);
      setNewRecipeName("");
      setNewRecipeContent("");
    }
  }

  function handleEditRecipe(id) {

  }

  function handleDeleteRecipe(id) {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  }

  // Filtra las recetas según el término de búsqueda
  const filteredRecipes = search
    ? recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.content.toLowerCase().includes(search.toLowerCase())
    )
    : recipes;

  return (
    <div>
      <h1>Recetario</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Buscar recetas..."
        />
        <button onClick={handleSearchButtonClick}>Buscar</button>
      </div>
      <div>
        {suggestions.map((suggestion) => (
          <span key={suggestion} onClick={() => handleSuggestClick(suggestion)}>
            {suggestion}
          </span>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newRecipeName}
          onChange={(e) => setNewRecipeName(e.target.value)}
          placeholder="Nombre de la receta"
        />
        <textarea
          value={newRecipeContent}
          onChange={(e) => setNewRecipeContent(e.target.value)}
          placeholder="Contenido de la receta"
        />
        <button onClick={handleCreateRecipe}>Crear Receta</button>
      </div>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>: {recipe.content}
            <button onClick={() => handleEditRecipe(recipe.id)}>Editar</button>
            <button onClick={() => handleDeleteRecipe(recipe.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}