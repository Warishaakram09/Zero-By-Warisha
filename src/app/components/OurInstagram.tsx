// import React from "react";

// function OurInstagram() {
//   return (
//     <>
//       <div className="h-[450px] bg-[url('/tp15.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
//         <div className="text-center">
//           {/* Instagram Title */}
//           <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold mb-4">
//             Our Instagram
//           </p>

//           {/* Instagram Description */}
//           <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-8">
//             Follow our store on Instagram
//           </p>

//           {/* Follow Us Button with Attractive Design */}
//           <button className="w-[255px] h-[65px] text-[20px] font-semibold bg-gradient-to-r from-[#FBE0C0] to-[#E2B97C] rounded-[50px] text-black shadow-lg hover:from-[#F6C89F] hover:to-[#C89B6A]:shadow-xl transition-all duration-300">
//             Follow Us
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurInstagram;


"use client"
import React from "react";

function OurInstagram() {
  const handleFollowUs = () => {
    // Replace with your Instagram URL
    window.location.href = "https://www.instagram.com/warisha_akram09/";
  };

  return (
    <>
      <div className="h-[450px] bg-[url('/tp15.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="text-center">
          {/* Instagram Title */}
          <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold mb-4">
            Our Instagram
          </p>

          {/* Instagram Description */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-8">
            Follow our store on Instagram
          </p>

          {/* Follow Us Button with Attractive Design */}
          <button
            onClick={handleFollowUs}
            className="w-[255px] h-[65px] text-[20px] font-semibold bg-gradient-to-r from-[#FBE0C0] to-[#E2B97C] rounded-[50px] text-black shadow-lg hover:from-[#F6C89F] hover:to-[#C89B6A]:shadow-xl transition-all duration-300"
          >
            Follow Us
          </button>
        </div>
      </div>
    </>
  );
}

export default OurInstagram;