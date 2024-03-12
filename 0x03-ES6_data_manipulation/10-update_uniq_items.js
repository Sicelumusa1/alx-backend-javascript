import './9-groceries_list';

export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of items) {
    if (quantity === 1) {
      items.set(item, 100);
    }
  }

  return items;
}
