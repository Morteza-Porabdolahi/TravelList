import { useState } from 'react';

import { Logo } from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

export function App() {
  const [items, setItems] = useState([]);

  function deleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleAddItem(newItem = {}) {
    setItems((items) => [...items, newItem]);
  }

  function clearItems() {
    const isConfirmed = confirm('Are you sure you want to delete all items ?');

    if(isConfirmed) {
      setItems([]);
    }
  }
  console.log('asdas')

  function handleToggleAsPacked(itemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              packed: !item.packed,
            }
          : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onToggleAsPacked={handleToggleAsPacked}
        items={items}
        onDeleteItem={deleteItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

