import { useState } from 'react';

export function Form({ onAddItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleForm(e) {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem = {
      id: Math.random() * 10000000000,
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your 😍 trip ? </h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from(Array(20), (_, index) => index + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..." />
      <button type="submit">Add</button>
    </form>
  );
}

