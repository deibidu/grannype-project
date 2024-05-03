import React, { useState } from "react";

const recipes = [
    id: 1, name: 'Tortilla de patata',
]

function recipeBook() {
    const [search, setSearch] = useState('');
}

const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()));