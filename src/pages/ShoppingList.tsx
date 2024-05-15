import React, { useState } from 'react';
import './ShoppingList.scss';
import '../sass/buttons.scss';

export function ShoppingList() {
  const [items, setItems] = useState<{ id: string; value: string; checked: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now().toString(), value: inputValue, checked: false }]);
      setInputValue(' ');
    }
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleOnChange = (id: string) => {
    setItems(items.map(item => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  return (
    <>
      <h1 className="font-title-sections ">What doy you need from the store?</h1>
      <div className="shoppingList">
        <div className="shoppingListContainer ">
          <div>
            <h2 className="font-title"> Your shopping list</h2>
          </div>

          <ul>
            {items.map(item => (
              <li
                className="font-text"
                key={item.id}
                style={{
                  textDecorationLine: item.checked ? 'line-through' : 'none',
                }}
              >
                <input
                  className="button__secondary-pink"
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleOnChange(item.id)}
                />

                {item.value}
                <button className="button__secondary-pink" onClick={() => handleRemove(item.id)}>
                  -
                </button>
              </li>
            ))}
          </ul>
          <div className="insertItem">
            <input
              type="text"
              className="inputShoppingListContainer"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button className="button__primary-pink" type="submit" onClick={addItem}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
