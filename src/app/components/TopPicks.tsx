// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link
// import { client } from "../../sanity/lib/client";
// import { urlFor } from "../../sanity/lib/image";

// // Define a Sanity Image type
// interface SanityImage {
//   asset: {
//     _ref: string;
//   };
// }

// // Define a Product type based on your Sanity schema
// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: SanityImage; // Updated image type
//   category: string;
// }

// const TopPicks = () => {
//   const [picks, setPicks] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Track loading state
//   const [error, setError] = useState<string | null>(null); // Track error state

//   useEffect(() => {
//     async function fetchPicks() {
//       try {
//         // Sanity query to fetch all products with category "Light" or "Chair"
//         const query = `*[_type == "product" && (category == "Light" || category == "Chair")]`; // Adjust query if necessary
//         const products = await client.fetch(query);

//         console.log("Fetched Products:", products); // Log to check the structure

//         if (products.length > 0) {
//           setPicks(products); // Set the picks data to state
//         } else {
//           setError("No products found.");
//         }
//       } catch (err) {
//         setError("Failed to fetch products.");
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false); // Stop loading when finished
//       }
//     }

//     fetchPicks();
//   }, []); // Runs once on component mount

//   if (loading) {
//     return <div>Loading...</div>; // Display a loading message
//   }

//   if (error) {
//     return <div>{error}</div>; // Display error message
//   }

//   return (
//     <div className="bg-[#ffffff] text-black">
//       {/* Header Section */}
//       <div className="text-center px-4 py-6">
//         <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
//           Top Picks For You
//         </p>
//         <p className="text-[14px] md:text-[16px] text-[#9F9F9F] mt-2">
//           Find a bright ideal to suit your taste with our great selection of
//           suspension, floor, and table lights.
//         </p>
//       </div>

//       {/* Products Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
//         {picks.length === 0 ? (
//           <p>No products available right now.</p>
//         ) : (
//           picks.map((pick) => (
//             <Link
//               key={pick._id}
//               href={`/product/${pick._id}`} // Link to the dynamic product page
//               className="bg-[#FAF4F4] rounded-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
//             >
//               {/* Image Container with Fixed Height */}
//               <div className="w-full h-48 overflow-hidden rounded-lg">
//                 <Image
//                   src={
//                     pick.image ? urlFor(pick.image).url() : "/fallback-image.jpg"
//                   } // Use urlFor() if image is an object
//                   alt={pick.name}
//                   className="w-full h-full object-cover"
//                   width={287}
//                   height={287}
//                 />
//               </div>
//               <p className="text-[14px] md:text-[16px] mt-2">{pick.name}</p>
//               <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
//                 Rs. {pick.price}
//               </p>
//             </Link>
//           ))
//         )}
//       </div>

//       {/* View More Section */}
//       <div className="text-center py-8">
//         <p className="text-[18px] md:text-[20px] underline cursor-pointer">
//           View More
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TopPicks;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

interface SanityImage {
  asset: {
    _ref: string;
  };
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: SanityImage;
  category: string;
}

const TopPicks = () => {
  const [picks, setPicks] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPicks() {
      try {
        const query = `*[_type == "product" && (category == "Light" || category == "Chair")]`;
        const products = await client.fetch(query);

        if (products.length > 0) {
          setPicks(products);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPicks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-[#ffffff] text-black">
      <div className="text-center px-4 py-6">
        <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
          Top Picks For You
        </p>
        <p className="text-[14px] md:text-[16px] text-[#9F9F9F] mt-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {picks.length === 0 ? (
          <p>No products available right now.</p>
        ) : (
          picks.map((pick) => (
            <Link
              key={pick._id}
              href={`/product/${pick._id}`}
              className="bg-[#FAF4F4] rounded-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={
                    pick.image ? urlFor(pick.image).url() : "/fallback-image.jpg"
                  }
                  alt={pick.name}
                  className="w-full h-full object-cover"
                  width={287}
                  height={287}
                />
              </div>
              <p className="text-[14px] md:text-[16px] mt-2">{pick.name}</p>
              <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
                Rs. {pick.price}
              </p>
            </Link>
          ))
        )}
      </div>

      <div className="text-center py-8">
        <p className="text-[18px] md:text-[20px] underline cursor-pointer">
          View More
        </p>
      </div>
    </div>
  );
};

export default TopPicks;