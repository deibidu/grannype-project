import React from "react";
import "../sass/colors.scss";

export function ListaCompra() {
  const [items, setItems] = React.useState<{ id: string; value: string }[]>([]);
  const input = React.useRef<HTMLInputElement>(null);

  const addItem = (text: string) => {
    setItems([...items, { id: items.toString(), value: text }]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <input type="text" ref={input} />
        <button onClick={() => addItem(input.current?.value || "")}>+</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.value}
              <button onClick={() => handleRemove(item.id)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
