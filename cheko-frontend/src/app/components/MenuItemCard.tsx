import { useState } from "react";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  calorie: number;
  price: number;
  image: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (item: MenuItem) => void;
}

function MenuItemCard({
  item,
  onClick,
  onAddItem,
  onRemoveItem,
}: MenuItemCardProps) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the onClick from being triggered on the parent button
  };

  return (
    <button
      onClick={onClick}
      className="border rounded-lg shadow-sm w-full sm:w-[420px] h-auto sm:h-[164.34px] bg-white p-4 flex flex-col sm:flex-row items-center gap-4"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full sm:w-[148px] sm:h-[128px] rounded object-center overflow-hidden"
      />
      <div className="flex flex-col text-left sm:ml-4">
        <h2 className="font-semibold text-lg text-[#1E1E1E]">{item.name}</h2>
        <p className="text-sm text-[#1E1E1E]">{item.calorie} Cal</p>
        <div className="flex items-center justify-between gap-8 mt-4 sm:mt-0 sm:gap-4">
          <p className="text-lg font-semibold text-[#F4CBDF] pr-2 whitespace-nowrap">
            <span>{item.price} SR</span>
          </p>
          <div className="flex items-center justify-center">
            {/* Decrement Button */}
            <div
              onClick={(e) => {
                handleButtonClick(e); // Prevent propagation
                decrement();
                onRemoveItem(item);
              }}
              className="w-[33px] h-[33px] bg-[#F4CBDF] text-black rounded-md flex items-center justify-center cursor-pointer"
            >
              <img
                src="/remove-Icon.svg"
                alt="minus-icon"
                className="w-[13.55px] h-auto object-contain"
              />
            </div>

            {/* Item Count */}
            <span className="mx-4 text-lg font-semibold text-gray-700">
              {count}
            </span>

            {/* Increment Button */}
            <div
              onClick={(e) => {
                handleButtonClick(e); // Prevent propagation
                increment();
                onAddItem(item);
              }}
              className="w-[33px] h-[33px] bg-[#F4CBDF] text-black rounded-md flex items-center justify-center cursor-pointer"
            >
              <img
                src="/add-Icons.svg"
                alt="plus-icon"
                className="w-[20.33px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default MenuItemCard;
