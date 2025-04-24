import { useState } from 'react';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    calorie: number;
    price: number;
    image: string;
}

interface PopupProps {
    item: MenuItem;
    onClose: () => void;
    onAddItem: (item : MenuItem) => void
    onRemoveItem: (item : MenuItem) => void
}

function Popup({ item, onClose , onAddItem , onRemoveItem}: PopupProps) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl  w-[575px] relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3"
                >
                    <img src="/close-circle%201.svg" alt="close" className="w-[30px] h-[30px]  object-cover rounded"/>
                </button>
                <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">{item.name}</h2>
                <p className="mt-2 text-sm text-[#757575]">{item.calorie} Cal</p>
                <p className="mt-2 text-sm text-[#757575] pb-10">{item.description}</p>
                <div className="w-[513px] h-[310px] bg-white rounded flex items-center justify-center overflow-hidden pb-8 ">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <div className="flex justify-end items-center mt-4 space-x-4">
                    {/* Price */}
                    <p className="text-lg font-semibold text-[#F4CBDF]">
                        {item.price} SR
                    </p>
                    {/* Decrement */}
                    <div
                        onClick={() => {
                            decrement();
                            onRemoveItem(item);
                        }}
                        className="w-[33px] h-[33px] bg-[#F4CBDF] rounded-md flex items-center justify-center cursor-pointer"
                    >
                        <img
                            src="/remove-Icon.svg"
                            alt="minus-icon"
                            className="w-[13.55px] h-auto object-contain"
                        />
                    </div>

                    {/* Count */}
                    <span className="text-lg font-semibold text-gray-700">{count}</span>

                    {/* Increment */}
                    <div
                        onClick={() => {
                            increment();
                            onAddItem(item);
                        }}
                        className="w-[33px] h-[33px] bg-[#F4CBDF] rounded-md flex items-center justify-center cursor-pointer"
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
    );
};



export default Popup;
