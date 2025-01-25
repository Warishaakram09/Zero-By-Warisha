// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const bgColor = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white";

//   useEffect(() => {
//     const checkIsMobile = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };

//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);

//     return () => {
//       window.removeEventListener("resize", checkIsMobile);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className={`${bgColor} font-poppins relative`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link href="/" className="flex-shrink-0">
//                 <span className="text-xl font-semibold text-gray-800">Warisha</span>
//               </Link>
//             </div>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex md:items-center sm:space-x-8">
//               <Link
//                 href="/"
//                 className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/shop"
//                 className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
//               >
//                 Shop
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
//               >
//                 Contact
//               </Link>
//             </div>

//             {/* Icons */}
//             <div className="hidden md:flex md:items-center sm:space-x-9">
//               <Link
//                 href="/myAccount"
//                 className="text-gray-800 hover:text-gray-600"
//               >
//                 <User size={22} />
//               </Link>
//               <button
//                 className="text-gray-800 hover:text-gray-600"
//                 onClick={() => alert("Search clicked")}
//               >
//                 <Search size={22} />
//               </button>
//               <button className="text-gray-800 hover:text-gray-600 relative">
//                 <Heart size={22} />
//                 <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//               <button className="text-gray-800 hover:text-gray-600 relative">
//                 <ShoppingCart size={22} />
//                 <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex items-center md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`${isOpen ? "absolute" : "hidden"} pt-12 md:hidden top-0 bg-white z-40 h-[10vh] w-[100%]`}
//         >
//           <div
//             className="px-2 pt-2 pb-3 space-y-1 bg-white"
//             onClick={toggleMenu}
//           >
//             <Link
//               href="/"
//               className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
//             >
//               Home
//             </Link>
//             <Link
//               href="/shop"
//               className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
//             >
//               Shop
//             </Link>
//             <Link
//               href="/blog"
//               className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const bgColor = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white";

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    // Implement your search logic here
    alert(`Searching for: ${searchQuery}`);
    // You can redirect to a search results page or filter items on the current page
  };

  return (
    <>
      <nav className={`${bgColor} font-poppins relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200">
                  <span className="text-[#FF6B6B]">W</span>arisha
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center sm:space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-semibold"
              >
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="hidden md:flex md:items-center sm:space-x-9">
              <Link
                href="/myAccount"
                className="text-gray-800 hover:text-gray-600"
              >
                <User size={22} />
              </Link>
              <button
                className="text-gray-800 hover:text-gray-600"
                onClick={() => setShowSearchBar(!showSearchBar)}
              >
                <Search size={22} />
              </button>
              {showSearchBar && (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-3 py-1 bg-gray-800 text-white rounded-r-md hover:bg-gray-700 focus:outline-none"
                  >
                    <Search size={18} />
                  </button>
                </div>
              )}
              <button className="text-gray-800 hover:text-gray-600 relative">
                <Heart size={22} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-gray-800 hover:text-gray-600 relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "absolute" : "hidden"} pt-12 md:hidden top-0 bg-white z-40 h-[10vh] w-[100%]`}
        >
          <div
            className="px-2 pt-2 pb-3 space-y-1 bg-white"
            onClick={toggleMenu}
          >
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}