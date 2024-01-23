import Item from './Item';
import { items, TravelItem } from '../data/items';

const ListItem = (): JSX.Element => {
        return (
                <div className="list">
                        <ul>
                                {items.map((item: TravelItem) => (
                                        <Item key={item.id} {...item} />
                                ))}
                        </ul>
                        <div className="actions">
                                <select
                                        aria-label="sort"
                                        value={''}
                                        onChange={() => console.log('handleSort')}
                                >
                                        <option value="0"> Sort by Input Order</option>
                                        <option value="1"> Sort by Description</option>
                                        <option value="2"> Sort by Packed Status</option>
                                </select>
                                <button
                                        type="button"
                                        onClick={() => console.log('handleClearList')}
                                >
                                        Clear List
                                </button>
                        </div>
                </div>
        );
};

export default ListItem;
