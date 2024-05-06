import React, { useState } from 'react';

function RecipeBook() {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState(['Aceite', 'Cebolla', 'Patata', 'Arroz', 'Huevo']);

    /*Cómo indicar que hay que buscar las palabras en las recetas creadas pero no crear una lista con los nombres de las recetas, sino una función que busque entre todas las recetas. Esta mal  */

    const [recipes, setRecipes] = useState([]);

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleSuggestClick(suggest) {
        setSearch(suggest);
    }

    /*Filtra las recetas según el término de búsqueda*/
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Recetario</h1>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Buscar recetas..."
                />
                <button>
                    <img src="ruta" alt="Ícono de búsqueda" />
                </button>
            </div>
            <div>
                {suggestions.map(suggestion => (
                    <span key={suggestion} onClick={() => handleSuggestClick(suggestion)}>
                        {suggestion}
                    </span>
                ))}
            </div>
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );

}

export default RecipeBook