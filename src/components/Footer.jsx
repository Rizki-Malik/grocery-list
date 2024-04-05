import PropTypes from 'prop-types';

export default function Footer({ items }) {
  const totalItems = items.length;

  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = totalItems === 0 ? 0 : Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array.isRequired,
};