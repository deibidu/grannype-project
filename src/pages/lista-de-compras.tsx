import React, { useState } from "react";
import "../sass/colors.scss";

export function ListaCompra() {
  const [items, setItems] = useState<{ id: string; value: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now().toString(), value: inputValue }]);
      setInputValue("");
    }
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
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
        <button onClick={addItem}>+</button>
      </div>
    </>
  );
}
