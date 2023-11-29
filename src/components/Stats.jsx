export function Stats({ items }) {
  if (items.length <= 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! </em>
      </p>
    );
  }

  const itemsLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItemsLength / itemsLength) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? 'You got everything! Ready to go 🛫'
          : `🛍 You have ${itemsLength} items on your list, and you already packed ${packedItemsLength} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

