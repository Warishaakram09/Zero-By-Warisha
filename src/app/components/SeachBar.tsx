"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Image from "next/image";

interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

interface Product {
  _id: string;
  name: string;
  image: SanityImage;
  price: number; // Added price for filtering
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false); // Toggle for advanced search
  const [minPrice, setMinPrice] = useState<number>(0); // Filter by price range
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch suggestions with debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setIsLoading(true);
        const query = `*[_type == "product" && name match "${searchTerm}*" && price >= $minPrice && price <= $maxPrice]{
          _id,
          name,
          image,
          price
        }`;
        client
          .fetch(query, { minPrice, maxPrice })
          .then((results: Product[]) => {
            setSuggestions(results);
            setIsLoading(false);
          });
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, minPrice, maxPrice]);

  // Handle suggestion click
  const handleSuggestionClick = (productId: string) => {
    router.push(`/product/${productId}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Find your perfect match..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {showAdvanced ? "Hide Filters" : "Advanced"}
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Min Price
              </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute right-3 top-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
        </div>
      )}

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {suggestions.map((product) => (
            <div
              key={product._id}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(product._id)}
            >
              <Image
                src={urlFor(product.image).url() || "/placeholder.svg"}
                alt={product.name}
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <span className="block text-sm font-medium">{product.name}</span>
                <span className="block text-xs text-gray-500">
                  Rs. {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}