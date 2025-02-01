// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className="">
//         <div className="flex flex-wrap justify-around">
//           <div className="flex items-center">
//             <a
//               className="text-[16px] texy-[#9F9F9F] py-[20px] text-[#9F9F9F]"
//               href=""
//             >
//               400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
//               33134 USA
//             </a>
//           </div>
//           <div className="grid">
//             <a className="text-[#9F9F9F] py-[20px]" href="">
//               Liks
//             </a>
//             <a className="py-[10px]" href="">
//               Home
//             </a>
//             <a className="py-[10px]" href="">
//               Shop
//             </a>
//             <a className="py-[10px]" href="">
//               About
//             </a>
//             <a className="py-[10px]" href="">
//               Contact
//             </a>
//           </div>
//           <div className="grid">
//             <a className="text-[#9F9F9F] py-[20px]" href="">
//               Help
//             </a>
//             <a className="py-[10px]" href="">
//               Payment Options
//             </a>
//             <a className="py-[10px]" href="">
//               Returns
//             </a>
//             <a className="py-[10px]" href="">
//               Privacy Policies
//             </a>
//           </div>

//           <div className="grid">
//             <a className="text-[#9F9F9F] py-[20px]" href="">
//               Newsletter
//             </a>
//             <div className="flex my-[20px]">
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border-b-2 rounded-l-md focus:outline-none"
//                 placeholder="Enter Your Email Address"
//               />
//               <button className="border-b-2 text-black border-b-black px-4 rounded-r-md">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="mx-[80px] py-[20px]">
//           <hr />
//           <p className="text-[16px] my-[20px]">
//             2022 Meubel House. All rights reverved
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="flex items-center">
            <a
              className="text-sm sm:text-base text-[#9F9F9F]"
              href="#"
            >
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </a>
          </div>

          {/* Links Section */}
          <div className="grid">
            <a className="text-sm sm:text-base text-[#9F9F9F] pb-4" href="#">
              Links
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Home
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Shop
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              About
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Contact
            </a>
          </div>

          {/* Help Section */}
          <div className="grid">
            <a className="text-sm sm:text-base text-[#9F9F9F] pb-4" href="#">
              Help
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Payment Options
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Returns
            </a>
            <a className="text-sm sm:text-base py-2 hover:text-black" href="#">
              Privacy Policies
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="grid">
            <a className="text-sm sm:text-base text-[#9F9F9F] pb-4" href="#">
              Newsletter
            </a>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                className="w-full md:w-auto px-4 py-2 border-b-2 rounded-l-md focus:outline-none"
                placeholder="Enter Your Email Address"
              />
              <button className="w-full md:w-auto border-b-2 text-black border-b-black px-4 py-2 rounded-r-md hover:bg-gray-100">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Line and Copyright Text */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm sm:text-base text-center text-[#9F9F9F]">
            © 2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;