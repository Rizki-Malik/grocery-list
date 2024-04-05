import Item from './Item';
import PropTypes from "prop-types";

export default function List({ items, onDeleteItem, onToggleItem }){
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />  
                ))}
            </ul>
        </div>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
}