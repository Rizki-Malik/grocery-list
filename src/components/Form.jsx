import { useState } from "react";
import PropTypes from "prop-types";
import handleSubmit from "../utils/handleItems";

export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleFormSubmit = (e) => {
        handleSubmit(e, name, quantity, onAddItem, setName, setQuantity);
    };

    const quantityNum = [...Array(10)].map((_, i) => (
        <option value={i + 1} key={i + 1}>{i + 1}</option>
    ));

    return (
        <form className="add-form" onSubmit={handleFormSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {quantityNum}
                </select>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit">Tambah</button>
        </form>
    );
}

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired
};