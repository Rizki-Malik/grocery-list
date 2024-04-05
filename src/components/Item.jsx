import PropTypes from 'prop-types';

export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.checked ? 'line-through' : '' }}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};