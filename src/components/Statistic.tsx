import { TravelItem } from '../data/items';

interface Props {
        items: TravelItem[];
}

const Statistics = ({ items }: Props): JSX.Element => {
        const packedItemsCount: number = items?.filter((item: TravelItem) => item.packed)?.length;

        const percentPacked: number = Math.round((packedItemsCount / items?.length) * 100);

        return (
                <footer className="stats">
                        {!items?.length && <em>Start adding items to your list 🚀</em>}
                        {(packedItemsCount === 0 ||
                                (packedItemsCount > 0 && percentPacked !== 100)) && (
                                <em>
                                        💼 You have {items.length} items on your list, and you
                                        already packed {packedItemsCount} ({percentPacked}%)
                                </em>
                        )}
                        {percentPacked === 100 && <em>You got everything! Ready to go ✈️</em>}
                </footer>
        );
};

export default Statistics;
