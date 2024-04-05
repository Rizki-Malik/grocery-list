import PropTypes from 'prop-types'

export default function Actions({ onClearItems, onFilterListItems, sortBy}){
    return(
        <div className="actions">
            <select value={sortBy} onChange={onFilterListItems}>
                <option value="input">Urutkan berdasarkan urutan input</option>
                <option value="name">Urutkan berdasarkan nama barang</option>
                <option value="checked">Urutkan berdasarkan ceklis</option>
            </select>
            <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
    );
}

Actions.propTypes = {
    onClearItems: PropTypes.func.isRequired,
    onFilterListItems: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
};