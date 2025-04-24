'use client';
import { Menu } from '@headlessui/react';
import { useState } from "react";


interface FilterProps {
    categoriesList: string[];
    onClick: (category: string) => void;
}

function Filter({ categoriesList = [], onClick }: FilterProps) {
    const [selectedCategory, setSelectedCategory] = useState("Filter");

    return (
        <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left w-[500px]">
                <Menu.Button className="inline-flex justify-between w-full px-4 py-1 bg-white text-black rounded-lg text-sm font-medium">
                    <div className="flex justify-between items-center">
                        <img
                            src="/ic-filter-list-48px 1.svg"
                            alt="filter icon"
                            className="w-[27px] h-[27px] pr-[8px]"
                        />
                        {selectedCategory}
                    </div>
                </Menu.Button>

                <Menu.Items className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {categoriesList.map((category, idx) => (
                        <Menu.Item key={idx} >
                            <button
                                onClick={() => {
                                    onClick(category); // ✅ Correct call
                                    setSelectedCategory(category); // ✅ Update local state
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-black"
                            >
                                {category}
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
}

export default Filter;
