import React, { useState, useMemo } from 'react';
import '../sass/colors.scss';
import '../sass/fonts.scss';
import '../pages/Recipes.scss';
import searchIcon from '../assets/images/search_icon_green.svg';
import arrowIcon from '../assets/images/ArrowIconGreen.svg';
import examplePhotoRecipe1 from '../assets/images/examplePhotoRecipe1.jpg';
import examplePhotorecipe2 from '../assets/images/examplePhotoRecipe2.jpg';
import examplePhotoRecipe3 from '../assets/images/examplePhotoRecipe3.jpg';

export function Recipes() {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  //  const newRecipeName = useMemo(() => '', []);

  const suggestions = useMemo(() => ['Aceite', 'Cebolla', 'Patata', 'Arroz', 'Huevo', 'Garbanzos'], []);
  const recipes = useMemo(
    () => [
      { id: 1, name: 'Ensalada César con aguacate', image: examplePhotoRecipe1 },
      { id: 2, name: 'Tortitas con nata y fresas', image: examplePhotorecipe2 },
      { id: 3, name: 'Especias caseras', image: examplePhotoRecipe3 },
    ],
    [],
  );

  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.target) {
      setSearch((event.target as HTMLInputElement).value);
    }
  }

  function handleSuggestClick(suggest: string) {
    setSearch(suggest);
    setShowSearch(true);
  }

  // function handleSearchButtonClick() {
  //   setSearch(newRecipeName);
  // }

  const filteredRecipes = useMemo(() => {
    if (search) {
      return recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()));
    }
    return recipes;
  }, [search, recipes]);

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
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt="Recipe" className="recipe-image" />
              <div className="recipe-content">
                <span className="recipe-title">{recipe.name}</span>
                <img src={arrowIcon} alt="Go to recipe" className="recipe-arrow" />
              </div>
            </div>
          ))
        ) : (
          <p>There's no recipes</p>
        )}
      </div>
    </div>
  );
}
