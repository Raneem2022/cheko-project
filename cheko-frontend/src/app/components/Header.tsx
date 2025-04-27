"use client";
import { useState } from "react";
import Link from "next/link";
import Filter from "./Filter";
import { usePathname } from "next/navigation";

interface HeaderProps {
  filterList: string[];
  onFilter: (category: string) => void;
  onSearch: (searchWord: string) => void;
}

function Header({ filterList, onFilter, onSearch }: HeaderProps) {
  const [searchWord, setsearchWord] = useState("");
  const pathname = usePathname();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchWord(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchWord); // Send search query to parent
  };
  return (
    <header>
      <div className="flex flex-col justify-between">
        <div className="bg-black w-[95%] h-[105px] rounded-br-xl ">
          <nav>
            <ul className="flex space-x-3 pl-60">
              <li>
                <Link
                  href="/"
                  className={`w-[90px] h-[50px] pt-2 flex items-center justify-center rounded-b-lg transition-colors duration-200 ${
                    pathname === "/" ? "bg-[#F4CBDF] text-black" : "text-white"
                  }`}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/MapPage"
                  className={` w-[90px] h-[50px]  pt-2  flex items-center justify-center rounded-b-lg transition-colors duration-200 ${
                    pathname === "/MapPage"
                      ? "bg-[#F4CBDF] text-black"
                      : "text-white"
                  }`}
                >
                  Map
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>{/*{for the dark and light mode}*/}</div>
      </div>
      <div className="flex flex-col items-center -mt-8">
        <div className="w-full max-w-7xl">
          <div className="flex items-center h-[62px] w-full bg-white shadow-md gap-4 px-4 rounded-xl ">
            {/* Search Field */}
            <div className="flex items-center flex-1">
              <img
                src="/search 1.svg"
                alt="search icon"
                className="w-[22px] h-[22px] pl-[8px]"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent text-black placeholder-black pl-2"
                value={searchWord}
                onChange={handleSearchChange}
              />
            </div>
            {/* Divider */}
            <div className="h-[62px] w-px bg-gray-300"></div>
            <div className="flex items-center justify-between flex-1 ">
              <Filter categoriesList={filterList} onClick={onFilter} />
              <button
                onClick={handleSearchClick}
                className="bg-[#F4CBDF] text-black font-semibold rounded-lg shadow-md w-[96px] h-[39px] transition duration-300"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
