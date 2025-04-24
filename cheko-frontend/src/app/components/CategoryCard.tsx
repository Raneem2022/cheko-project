import { useEffect, useState } from 'react';
import {fetchCountItemsByCategory} from "../api/model";

interface CategoryCardProps {
    category: string;
    itemsCardCount : number;
    onClick: (category : string) => void;
}


function CategoryCard({ category, itemsCardCount , onClick }: CategoryCardProps) {
    const categoryColors: { [key: string]: string } = {
        breakfast: '#F4CBDF',
        drinks: '#CDDFEC',
        soup: '#E7DEE3',
        sushi: '#D1D1EF',
    };
    const backgroundColor = categoryColors[category.toLowerCase()] || '#D0EAE3';
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        const loadCount = async () => {
            try {
                const data = await fetchCountItemsByCategory(category);
                setItemsCount(data);
            } catch (error) {
                console.error('Error fetching item count:', error);
            }
        };
        loadCount();
    }, []);

    const displayedCount = itemsCount === 0 ? itemsCardCount : itemsCount;

    return (
        <button
            className="border rounded-lg shadow-sm w-[220px] h-[71px] bg-white p-4 flex items-center gap-4"
            style={{ border: 'none', outline: 'none' }}
            onClick={() => onClick(category)}
        >
            <div
                className="flex items-center justify-center rounded-lg"
                style={{
                    backgroundColor,
                    height: '50.98px',
                    width: '53.42px',
                }}
            >
                <img
                    src={`/${category.toLowerCase()}.svg`}
                    alt={category}
                    className="w-[24px] h-[24px] rounded object-cover"
                />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-black">{category}</h3>
            <h3 className=" text-left mt-2 text-lg font-semibold text-black">{displayedCount}</h3>
        </button>
    );
};

export default CategoryCard;
