import React, { useState } from 'react';

function RecipeBook() {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState(['Aceite', 'Cebolla', 'Patata', 'Arroz', 'Huevo']);

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    /*Cómo indicar que hay que buscar las palabras en las recetas creadas pero no crear una lista con los nombres de las recetas, sino una función que busque entre todas las recetas */
}

export default RecipeBook