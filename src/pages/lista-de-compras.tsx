import React, { useState } from "react";
import "../sass/colors.scss";

export function ListaCompra() {
  const [items, setItems] = useState<
    { id: string; value: string; checked: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([
        ...items,
        { id: Date.now().toString(), value: inputValue, checked: false },
      ]);
      setInputValue(" ");
    }
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleOnChange = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                textDecorationLine: item.checked ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleOnChange(item.id)}
              />

              {item.value}
              <button onClick={() => handleRemove(item.id)}>-</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={addItem}>
          +
        </button>
      </div>
    </>
  );
}
