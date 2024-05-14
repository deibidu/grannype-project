import React, { useState } from 'react';

export function CreateRecipe() {

  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeContent, setNewRecipeContent] = useState('');

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

  function handleEditRecipe(id) { }

  function handleDeleteRecipe(id) {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  }

  return (
    <div>
      <h1 className="font-title">Create Your Recipes</h1>

      <div>
        <input
          type="text"
          value={newRecipeName}
          onChange={e => setNewRecipeName(e.target.value)}
          placeholder="Meal title"
        />
        <textarea
          value={newRecipeContent}
          onChange={e => setNewRecipeContent(e.target.value)}
          placeholder="Recipe containt"
        />
        <button onClick={handleCreateRecipe}>Create Recipe</button>
      </div>
    </div>
  )
}

