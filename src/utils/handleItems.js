export function handleAddItem(items, setItems, item) {
    setItems([...items, item]);
}

export function handleDeleteItem(items, setItems, id) {
    setItems((items) => items.filter((item) => item.id !== id));
}

export function handleToggleItem(items, setItems, id) {
    setItems((items) =>
        items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
    );
}

export function handleClearItems(setItems) {
    setItems([]);
}

export function handleListItems(e, setSortBy) {
    setSortBy(e.target.value);
}

export default function handleSubmit(e, name, quantity, onAddItem, setName, setQuantity) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    setName('');
    setQuantity(1);
}