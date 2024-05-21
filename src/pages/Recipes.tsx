import React, { useState } from 'react';
import '../sass/colors.scss';
import '../sass/fonts.scss';
import '../pages/Recipes.scss';
import searchIcon from '../assets/images/search_icon_green.svg';

export function Recipes() {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(['Aceite', 'Cebolla', 'Patata', 'Arroz', 'Huevo', 'Garbanzos']);
  const [showSearch, setShowSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeContent, setNewRecipeContent] = useState('');

  function handleSearch(event) {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
    }
  }

  function handleSuggestClick(suggest) {
    setSearch(suggest);
    setShowSearch(true);
  }

  function handleSearchButtonClick() {
    setSearch(newRecipeName);
  }

  function handleCreateRecipe() {
    if (newRecipeName.trim() !== '' && newRecipeContent.trim() !== '') {
      const newRecipe = {
        id: recipes.length + 1,
        name: newRecipeName,
        content: newRecipeContent,
      };
      setRecipes([...recipes, newRecipe]);
      setNewRecipeName('');
      setNewRecipeContent('');
    }
  }
  /* FUNCIONES PARA CUANDO ESTÉN LAS RECETAS HECHAS Y PUEDAS EDITARLAS O ELIMINARLAS
    function handleEditRecipe(id) { }
  
    function handleDeleteRecipe(id) {
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
      setRecipes(updatedRecipes);
    }
  */
  const filteredRecipes = search
    ? recipes.filter(
        recipe =>
          recipe.name.toLowerCase().includes(search.toLowerCase()) ||
          recipe.content.toLowerCase().includes(search.toLowerCase()),
      )
    : recipes;

  return (
    <div className="recipes-container">
      <h1 className="font-title">Your Recipes</h1>
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" onClick={() => setShowSearch(!showSearch)} />
        {showSearch && (
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search your recipes..."
          />
        )}
      </div>
      <div className="suggestions">
        {suggestions.map(suggestion => (
          <span key={suggestion} className="suggestion" onClick={() => handleSuggestClick(suggestion)}>
            {suggestion}
          </span>
        ))}
      </div>
      <ul className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <li key={recipe.id}>
              <strong>{recipe.name}</strong>: {recipe.content}
              <button onClick={() => handleEditRecipe(recipe.id)}>Edit</button>
              <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No se encuentra ninguna receta</p>
        )}
      </ul>
    </div>
  );
}
