import { MagnifyingGlass } from "phosphor-react";

const SearchBar = ({ type , placeholder }) => {
    return (
        <div className="flex items-center justify-between bg-white border-2 border-black py-2 h-10 mt-10 focus:outline-none w-full text-sm  placeholder-slate-400 rounded-md py-2 pl-5 shadow-md text-black">
            <input
            type={type}
            placeholder={placeholder}
            className="outline-none flex-1 p-2"
            />
            <MagnifyingGlass size={20} color="black" weight="bold" className="flex-none mr-2" />
        </div>
);
};

export default SearchBar;