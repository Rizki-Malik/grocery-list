import groceryItems from '../utils/groceryItem';
import Item from './Item';

export default function List(){
    return (
        <div className="list">
            <ul>
                {groceryItems.map((item) => (
                    <Item item={item} key={item.id} />  
                ))}
            </ul>
        </div>
    );
}