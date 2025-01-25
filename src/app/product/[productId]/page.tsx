"use client"; // Mark this as a Client Component

import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TrashIcon } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes?: string[]; // Ensure sizes are included
  colors?: string[];
}

// Define CartItem type
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string; // Ensure size is included
  color?: string;
}

// Fetch product data dynamically from Sanity
async function getProductData(productId: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $productId][0]`;
  const product = await client.fetch(query, { productId });
  return product;
}

// Main Component
export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State for selected size
  const [cartOpen, setCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const routeParams = useParams();
  const productId = routeParams?.productId as string;

  // Fetch product data
  useEffect(() => {
    async function fetchData() {
      if (productId) {
        const productData = await getProductData(productId);
        setProduct(productData);
      }
    }
    fetchData();
  }, [productId]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart with quantity and size
  const addToCart = () => {
    if (!product) return;

    const existingItem = cart.find(
      (item) => item.id === product._id && item.size === selectedSize
    );

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product._id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          size: selectedSize || undefined, // Include selected size
        },
      ]);
    }
    setCartOpen(true); // Open cart on adding
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Product Image */}
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-4">{product.description}</p>
            <p className="text-2xl mt-4 font-semibold">$ {product.price}</p>

            {/* Size Options */}
            <div className="mt-6">
              <span className="font-semibold">Size:</span>
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

            {/* Rating */}
            <div className="flex items-center mt-6 space-x-4">
              <span className="font-semibold">Rating:</span>
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base">
                (5 Customer Reviews)
              </span>
            </div>

            {/* Color Options */}
            <div className="flex items-center mt-4 space-x-4">
              <span className="font-semibold">Color:</span>
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

            {/* Quantity Selector */}
            <div className="flex items-center mt-6 space-x-4">
              <span className="font-semibold">Quantity:</span>
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
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 w-96 bg-white h-full shadow-lg flex flex-col">
            <div className="flex justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size || "no-size"}`}
                  className="flex items-center mb-4"
                >
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      $ {item.price} x {item.quantity} (Size: {item.size || "N/A"})
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <p className="text-lg font-bold">Total: $ {getTotalPrice()}</p>
              <button
                onClick={() => alert("Proceeding to Checkout")}
                className="mt-4 w-full bg-black text-white py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}