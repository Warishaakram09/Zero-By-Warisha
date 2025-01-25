"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function SingleProductPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State for selected size
  const [quantity, setQuantity] = useState(1); // State for quantity

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="py-4 px-32">
        <p className="text-sm text-gray-500 mt-2 flex items-left justify-left space-x-2">
          <span>Home</span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-900 h-3 w-3 text-xs"
          />
          <span>Shop</span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-900 h-3 w-3 text-xs"
          />
          <span>Asgaard Sofa</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-50 p-4 rounded-lg w-full">
            <Image
              src="/tp14.png"
              alt="Asgaard sofa"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4 w-full">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-yellow-50 p-6 justify-center items-center rounded-lg cursor-pointer border border-gray-200 hover:border-gray-400"
              >
                <Image
                  src={`/tp${item}.png`}
                  alt={`Thumbnail ${item}`}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">Asgaard sofa</h1>
          <p className="text-2xl font-semibold text-gray-400 mt-2">
            Rs. 250,000.00
          </p>

          {/* Rating */}
          <div className="flex items-center mt-4 space-x-1">
            <div className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.719 1.492 8.281-7.488-3.951-7.488 3.951 1.492-8.281-6.004-5.719 8.332-1.151z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.57 8.332 1.151-6.004 5.719 1.492 8.281-7.488-3.951-7.488 3.951 1.492-8.281-6.004-5.719 8.332-1.151z" />
              </svg>
            </div>
            <span className="text-gray-500 text-sm ml-2">
              5 Customer Reviews
            </span>
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Size</h3>
            <div className="flex space-x-4 mt-2">
              {["M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color</h3>
            <div className="flex space-x-4 mt-2">
              {["#AEC6CF", "#D8C3A5", "#B2F2BB", "#FFC1CC", "#EBD9C3"].map(
                (color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full border cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></div>
                )
              )}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-6 space-x-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={toggleCart}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-4 flex border-b border-gray-300 pb-2"></div>

          {/* Product Metadata */}
          <div className="mt-16">
            <p className="text-md text-gray-600">
              <span className="font-medium ">SKU</span>
              <span className="font-medium p-10"> :</span>
              SS001
            </p>
            <p className="text-md text-gray-600 mt-4">
              <span className="font-medium ">Category</span>
              <span className="font-medium pr-10 pl-2"> :</span>
              Sofas
            </p>
            <p className="text-md text-gray-600 mt-4">
              <span className="font-medium">Tags</span>
              <span className="font-medium p-10"> :</span>
              Sofa, Chair, Home, Shop
            </p>
            <p className="text-md text-gray-600 mt-4 flex items-center">
              <span className="font-medium ">Share</span>
              <span className="font-medium pl-8 pr-10"> :</span>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-gray-700">
                  <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                </a>

                <button className="text-red-500 hover:text-red-700 pl-40">
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex border-b border-gray-300 pb-2"></div>
      <div className="bg-white min-h-screen py-16 px-8">
        {/* Product Description Section */}
        <div className="max-w-7xl mx-auto">
          {/* Tabs for Description, Additional Information, and Reviews */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              <button className="text-black text-xl font-medium hover:text-gray-900">
                Description
              </button>
              <button className="text-gray-500 text-xl font-medium hover:text-gray-700">
                Additional Information
              </button>
              <button className="text-gray-500 text-xl font-medium hover:text-gray-700">
                Reviews
              </button>
            </div>
          </div>

          <div>
            {/* Description Content */}
            <div className="px-4 py-8 text-gray-700">
              <h3 className="text-xl font-semibold">Product Description</h3>
              <p className="text-lg mt-4">
                Set the bar as one of the loudest speakers in its class...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}