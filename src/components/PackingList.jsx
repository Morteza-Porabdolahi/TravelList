import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItem, onToggleAsPacked, onClearItems }) {
  const [sortOption, setSortOption] = useState('input');

  let sortedItems;

  if (sortOption === 'input') {
    sortedItems = items;
  } else if (sortOption === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortOption === 'packed') {
    sortedItems = items.slice().sort((a) => (a.packed ? -1 : 1));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleAsPacked={onToggleAsPacked} />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

