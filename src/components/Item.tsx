import { TravelItem } from '../data/items';

interface Props {
        item: TravelItem;
        onToggleItem: (itemId: number) => void;
}

const Item = ({ item, onToggleItem }: Props): JSX.Element => {
        // convert boolean string to boolean
        // i.e. "true" -> true, "false" -> false
        const convertToBoolean = (packed: boolean) => JSON.parse(`${packed}`);

        return (
                <li>
                        <input
                                aria-label="checkbox"
                                type="checkbox"
                                value={convertToBoolean(item.packed)}
                                onChange={() => onToggleItem(item.id)}
                        />
                        <span className={item.packed ? 'packed' : ''}>
                                {item.quantity} {item.description}
                        </span>
                        ❌
                </li>
        );
};

export default Item;
