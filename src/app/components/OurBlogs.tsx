// import React from "react";
// import Image from "next/image";

// function OurBlogs() {
//   return (
//     <>
//       <div className="my-[20px] px-4">
//         {/* Title */}
//         <p className="text-center text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] mt-[20px] font-semibold">
//           Our Blogs
//         </p>
//         <p className="text-center text-[#9F9F9F] text-[14px] sm:text-[16px] lg:text-[18px] my-[10px] sm:my-[20px]">
//           Find a bright ideal to suit your taste with our great selection
//         </p>

//         {/* Blogs Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] justify-items-center">
//           {/* Blog 1 */}
//           <div className="w-full max-w-[300px]">
//             <Image
//               src="/p1.png"
//               alt="Blog Image 1"
//               className="w-full h-auto rounded-md"
//               width={300}
//               height={300}
//             />
//             <div className="py-[20px]">
//               <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
//                 Going all-in with millennial design
//               </p>
//               <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
//                 Read More
//               </p>
//             </div>
//             <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
//               <div className="flex items-center gap-[5px]">
//                 <span>🕒</span>
//                 <p>5 min</p>
//               </div>
//               <div className="flex items-center gap-[5px]">
//                 <span>📅</span>
//                 <p>12th Oct 2022</p>
//               </div>
//             </div>
//           </div>

//           {/* Blog 2 */}
//           <div className="w-full max-w-[300px]">
//             <Image
//               src="/p2.png"
//               alt="Blog Image 2"
//               className="w-full h-auto rounded-md"
//               width={300}
//               height={300}
//             />
//             <div className="py-[20px]">
//               <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
//                 Going all-in with millennial design
//               </p>
//               <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
//                 Read More
//               </p>
//             </div>
//             <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
//               <div className="flex items-center gap-[5px]">
//                 <span>🕒</span>
//                 <p>5 min</p>
//               </div>
//               <div className="flex items-center gap-[5px]">
//                 <span>📅</span>
//                 <p>12th Oct 2022</p>
//               </div>
//             </div>
//           </div>

//           {/* Blog 3 */}
//           <div className="w-full max-w-[300px]">
//             <Image
//               src="/p3.png"
//               alt="Blog Image 3"
//               className="w-full h-auto rounded-md"
//               width={300}
//               height={300}
//             />
//             <div className="py-[20px]">
//               <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
//                 Going all-in with millennial design
//               </p>
//               <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
//                 Read More
//               </p>
//             </div>
//             <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
//               <div className="flex items-center gap-[5px]">
//                 <span>🕒</span>
//                 <p>5 min</p>
//               </div>
//               <div className="flex items-center gap-[5px]">
//                 <span>📅</span>
//                 <p>12th Oct 2022</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* View More */}
//         <p className="text-center py-[30px] sm:py-[40px] lg:py-[60px] underline text-[16px] sm:text-[18px] lg:text-[20px] text-black cursor-pointer">
//           View More
//         </p>
//       </div>
//     </>
//   );
// }

// export default OurBlogs;
import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Import unique icons

function OurBlogs() {
  return (
    <>
      <div className="my-[40px] px-4">
        {/* Title */}
        <p className="text-center text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] font-semibold">
          Our Blogs
        </p>
        <p className="text-center text-[#9F9F9F] text-[14px] sm:text-[16px] lg:text-[18px] my-[20px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center">
          {/* Blog 1 */}
          <div className="w-full max-w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/p1.png"
              alt="Blog Image 1"
              className="w-full h-[200px] object-cover rounded-t-lg"
              width={350}
              height={200}
            />
            <div className="p-[20px]">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-center">
                Going all-in with millennial design
              </p>
              <div className="flex justify-center gap-[15px] text-[14px] sm:text-[16px] text-gray-600 mt-[10px]">
                <div className="flex items-center gap-[5px]">
                  <FaCalendarAlt className="text-[#6B7280]" />
                  <p>12th Oct 2022</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FaClock className="text-[#6B7280]" />
                  <p>5 min</p>
                </div>
              </div>
              <p className="text-[16px] sm:text-[18px] text-center text-[#4B5563] mt-[15px]">
                Explore the latest trends in millennial design and how to incorporate them into your home.
              </p>
              <p className="text-[18px] sm:text-[20px] text-center underline text-black cursor-pointer mt-[20px] hover:text-[#1E40AF] transition-colors duration-300">
                Read More
              </p>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="w-full max-w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/p2.png"
              alt="Blog Image 2"
              className="w-full h-[200px] object-cover rounded-t-lg"
              width={350}
              height={200}
            />
            <div className="p-[20px]">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-center">
                Minimalist design for modern living
              </p>
              <div className="flex justify-center gap-[15px] text-[14px] sm:text-[16px] text-gray-600 mt-[10px]">
                <div className="flex items-center gap-[5px]">
                  <FaCalendarAlt className="text-[#6B7280]" />
                  <p>15th Oct 2022</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FaClock className="text-[#6B7280]" />
                  <p>7 min</p>
                </div>
              </div>
              <p className="text-[16px] sm:text-[18px] text-center text-[#4B5563] mt-[15px]">
                Discover the beauty of minimalist design and how it can transform your living space.
              </p>
              <p className="text-[18px] sm:text-[20px] text-center underline text-black cursor-pointer mt-[20px] hover:text-[#1E40AF] transition-colors duration-300">
                Read More
              </p>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="w-full max-w-[350px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/p3.png"
              alt="Blog Image 3"
              className="w-full h-[200px] object-cover rounded-t-lg"
              width={350}
              height={200}
            />
            <div className="p-[20px]">
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-center">
                Sustainable home decor ideas
              </p>
              <div className="flex justify-center gap-[15px] text-[14px] sm:text-[16px] text-gray-600 mt-[10px]">
                <div className="flex items-center gap-[5px]">
                  <FaCalendarAlt className="text-[#6B7280]" />
                  <p>20th Oct 2022</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FaClock className="text-[#6B7280]" />
                  <p>6 min</p>
                </div>
              </div>
              <p className="text-[16px] sm:text-[18px] text-center text-[#4B5563] mt-[15px]">
                Learn how to create a sustainable and eco-friendly home with these decor tips.
              </p>
              <p className="text-[18px] sm:text-[20px] text-center underline text-black cursor-pointer mt-[20px] hover:text-[#1E40AF] transition-colors duration-300">
                Read More
              </p>
            </div>
          </div>
        </div>

        {/* View More */}
        <p className="text-center py-[40px] sm:py-[50px] lg:py-[60px] underline text-[18px] sm:text-[20px] text-black cursor-pointer hover:text-[#1E40AF] transition-colors duration-300">
          View More
        </p>
      </div>
    </>
  );
}

export default OurBlogs;