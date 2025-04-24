'use client';
import { useState } from 'react';
import MenuItemCard from '@/app/components/MenuItemCard';
import CategoryCard from "@/app/components/CategoryCard"; // Correct import path
import Popup from '@/app/components/Popup';
import PlaceOrder   from "@/app/components/PlaceOrder";
export interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    calorie: number;
    price: number;
    image: string;
}

interface HomePageProps {
    menuList: MenuItem[];
    categoriesList: string[];
    selectedCategory: string;
    onClick: (category: string) => void;
}



function HomePage({ menuList, categoriesList, selectedCategory ,onClick }: HomePageProps) {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [Card, setCardItem] = useState<MenuItem[]>([]);

    const addItemToCard = (item: MenuItem) => {
        setCardItem((prevCard) => [...prevCard, item]);
    };

    const removeItem = (itemToRemove: MenuItem) => {
        setCardItem(prev => {
            const index = prev.findIndex(item => item.id === itemToRemove.id);
            if (index === -1) return prev;

            const newArray = [...prev];
            newArray.splice(index, 1); // Remove the first match by id
            return newArray;
        });
    };
    return (
        <div className="flex flex-col items-center">
            {/* Categories */}
            <div className="py-10 w-full max-w-7xl flex items-center justify-between">
                <div className="flex flex-wrap gap-6 justify-start">
                    {categoriesList.map((category, index) => (
                        <CategoryCard
                            key={index}
                            category={category}
                            itemsCardCount={0}
                            onClick={() => {
                                {onClick(category)};
                            }}
                        />
                    ))}
                    <div className="h-[71px] w-px bg-gray-300"></div>
                    <CategoryCard
                        key={5}
                        category={"Orders"}
                        itemsCardCount={Card.length}
                        onClick={(category) => {
                            {onClick(category)};
                        }}
                    />
                </div>
            </div>

            {/* Menu Section */}
            <div className="w-full max-w-7xl">
                <div className="flex items-center mb-6">
                    <h1 className="text-2xl font-bold text-black mr-4 whitespace-nowrap">{selectedCategory}</h1>
                    <hr className="flex-1 h-px bg-gray-300 border-0 rounded-sm" />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(selectedCategory === "Orders" ? Card : menuList).map((item, index) => (
                        <MenuItemCard
                            key={index}
                            item={item}
                            onAddItem={() => addItemToCard(item)}
                            onRemoveItem={() => removeItem(item)}
                            onClick={() => setSelectedItem(item)}
                        />
                    ))}
                </ul>

            </div>

            {selectedItem && (
                <Popup
                    item={selectedItem}
                    onRemoveItem={(item) => {
                        removeItem(item)
                    }}
                    onAddItem={(item) => {
                        addItemToCard(item)
                    } }
                    onClose={() => setSelectedItem(null)}
                />
            )}

            {selectedCategory === "Orders" && (
                <div className="pt-50 flex justify-end w-full max-w-7xl">
                    <PlaceOrder card={Card} />
                </div>
            )}

        </div>
    );
}

export default HomePage;
