import React, { useState, useEffect } from 'react';
import '../sass/colors.scss';
import '../sass/fonts.scss';
import '../pages/Recipes.scss';
import searchIcon from '../assets/images/search_icon_green.svg';
import arrowIcon from '../assets/images/ArrowIconGreen.svg';

export function Recipes() {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(['Aceite', 'Cebolla', 'Patata', 'Arroz', 'Huevo', 'Garbanzos']);
  const [showSearch, setShowSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeContent, setNewRecipeContent] = useState('');

  useEffect(() => {
    const exampleRecipe = {
      id: 1,
      name: 'Ejemplo de Receta',
      imageUrl: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
    };
    setRecipes([exampleRecipe]);
  }, []);

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
      <h1 className="font-title-sections">Your Recipes</h1>
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
            <li key={recipe.id} className="recipe-item">
              <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
              <div className="recipe-footer">
                <h2>{recipe.name}</h2>
                <img src={arrowIcon} alt="View Recipe" className="arrow-icon" />
              </div>
            </li>
          ))
        ) : (
          <p>No se encuentra ninguna receta</p>
        )}
      </ul>
    </div>
  );
}
