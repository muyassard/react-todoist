import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative h-full z-10   ">
      <div className="rounded-lg absolute p-5 shadow-xl  bg-gray-100 left-[25%] top-[25%]">
        <form className="w-[600px]">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative flex item-center">
            <div className="absolute inset-y-0  flex items-center ps-3 ">
              <FaSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className=" outline-none w-[600px] py-4 ps-10 pr-[100px] text-sm text-gray-900  rounded-lg bg-transparent  "
              placeholder="Search..."
              required
            /> 
            <button
              type="submit"
              className="text-white absolute right-5 top-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Search;
