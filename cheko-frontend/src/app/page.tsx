'use client';
import Header from "@/app/components/Header";
import HomePage from "@/app/components/HomePage";
import {useEffect, useState} from "react";
import {fetchCategories, fetchMenu, fetchMenuByCategory} from "@/app/api/model";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  calorie: number;
  price: number;
  image: string;
}


export default function Home() {
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Menu");

  useEffect(() => {
    const loadMenu = async () => {
      const data = await fetchMenu();
      const category = await fetchCategories();
      setCategoriesList(category);
      setMenuList(data);
    };
    loadMenu();
  }, []);
  const handleCategoryClick = async (category: string) => {
    if (category!= "Orders" ){
      const data = await fetchMenuByCategory(category);
      setSelectedCategory(category);
      setMenuList(data);
    }else {
      setSelectedCategory(category);
    }
  };
  const handleSearch = async (searchWord: string) => {
    const fullMenu = await fetchMenu(); // reload full menu data
    const filteredItems = fullMenu.filter((item: MenuItem) =>
        item.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.description.toLowerCase().includes(searchWord.toLowerCase())
    );

    setMenuList(filteredItems);
    setSelectedCategory(searchWord + " result");
  };


  return (
      <div>
        <div className="flex flex-col bg-[#F5F6F8]">
          <Header filterList={categoriesList}  onFilter={handleCategoryClick} onSearch={handleSearch}/>
        </div>
        <div className="flex flex-col pb-8">
          <HomePage
              menuList={menuList}
              categoriesList={categoriesList}
              selectedCategory={selectedCategory}
              onClick={handleCategoryClick}
          />
        </div>
      </div>
  );
}

