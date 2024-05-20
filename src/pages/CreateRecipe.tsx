import React, { useState, useContext } from 'react';
import './CreateRecipe.scss';

export function CreateRecipe() {
  /*<<<<<<< HEAD
=======
  const [recipeBuilder, setRecipeBuilder] = useState<
    { id: string; title: string; ingredients: string[]; steps: string; notes: string; image?: string }[]
  >([]);

  //   const userContext = React.createContext();
  //   const userToggleContext = React.createContext();
  // export function useUserContext() {
  //   return useContext(userContext);
  // }

  // export function useUserToggleContext() {
  //   return useContext(userToggleContext);
  // }

  return (
    <>
      <div className="CreateRecipe">
        <div>
          <input className="createrecipe-inputMealTitle" placeholder="Your meal title"></input>
        </div>

        <div className="createrecipe-ingedientsAndImage">
          <div className="cr-image"></div>

          <div className="cr-ingredients">
            <div className="cr-ingredients__title">
              <h3>Ingredients</h3>
            </div>
            <div className="cr-ingredients__list">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="createrecipe-preparation">
          <div>
            <h3>Preparation</h3>
          </div>
          <div className="cr-steps">
            <textarea className="cr-steps__input" placeholder="Introduce the steps"></textarea>
          </div>
        </div>

        <div className="createrecipe-notes">
          <div className="cr-notes__title">
            <h3>Notes</h3>
          </div>
          <div className="cr-notes">
            <textarea className="cr-notes__input" placeholder="Any notes?"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> feature/customize */

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

  function handleEditRecipe(id) {}

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
  );
}
