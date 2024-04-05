import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Actions from "./components/Actions";
import Footer from "./components/Footer";
import { useState } from "react";
import {
    handleAddItem,
    handleDeleteItem,
    handleToggleItem,
    handleClearItems,
    handleListItems,
} from "./utils/handleItems";

export default function App() {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    switch (sortBy) {
        case "name":
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "checked":
            sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
            break;
        default:
            sortedItems = items;
            break;
    }

    return (
        <div className="app">
            <Header />
            <Form onAddItem={(item) => handleAddItem(items, setItems, item)} />
            <List
                items={sortedItems}
                onDeleteItem={(id) => handleDeleteItem(items, setItems, id)}
                onToggleItem={(id) => handleToggleItem(items, setItems, id)}
            />
            <Actions
                sortBy={sortBy}
                onClearItems={() => handleClearItems(setItems)}
                onFilterListItems={(e) => handleListItems(e, setSortBy)}
            />
            <Footer items={items} />
        </div>
    );
}