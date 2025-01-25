
// import React from "react";

// interface SearchBarDropdownProps {
//   searchTerm: string;
//   setSearchTerm: (term: string) => void;
//   selectedCategory: string;
//   setSelectedCategory: (category: string) => void;
//   categories: string[];
// }

// const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
//   searchTerm,
//   setSearchTerm,
//   selectedCategory,
//   setSelectedCategory,
//   categories,
// }) => {
//   return (
//     <div className="flex justify-between items-center mb-6 gap-4">
//       {/* Floating Label Search Input with Icon */}
//       <div className="relative w-1/2">
//         <input
//           type="text"
//           placeholder=" "
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full p-3 pt-5 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md peer"
//         />
//         <label className="absolute left-10 top-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
//           Search for products...
//         </label>
//         <svg
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//       </div>

//       {/* Custom Styled Dropdown with Icon */}
//       <div className="relative w-1/4">
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md appearance-none bg-white"
//         >
//           <option value="">All Categories</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//           <svg
//             className="w-5 h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBarDropdown;

import React from "react";

interface SearchBarDropdownProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  onSortChange?: (sortBy: string) => void; // Optional sorting feature
}

const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  onSortChange,
}) => {
  return (
    <div className="flex justify-between items-center mb-6 gap-4">
      {/* Floating Label Search Input with Icon */}
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder=" "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pt-5 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md peer"
        />
        <label className="absolute left-10 top-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
          Search for products...
        </label>
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Category Dropdown */}
      <div className="relative w-1/4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md appearance-none bg-white"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Optional Sorting Dropdown */}
      {onSortChange && (
        <div className="relative w-1/4">
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md appearance-none bg-white"
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarDropdown;