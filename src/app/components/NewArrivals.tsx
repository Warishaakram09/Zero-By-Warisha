import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link

function NewArrivals() {
  return (
    <>
      <div className="h-[639px] flex flex-wrap items-center justify-center gap-[50px] bg-[#FFF9E5] text-black">
        <Image
          src="/tp14.png"
          alt="Asgaard sofa"
          className="h-[700px] w-[900px]"
          width={983}
          height={799}
        />
        <div className="">
          <p className="text-[24px] text-center">New Arrivals</p>
          <p className="font-bold text-[48px]">Asgaard sofa</p>

          {/* Order Now Button */}
          <div className="ml-[60px] flex justify-center border my-[15px] w-[200px] h-[44px] bottom-[7px] border-black hover:bg-black hover:text-white transition-all duration-300">
            <Link href="/product/asgaard-sofa"> {/* Replace with your product ID */}
              <button className="w-full h-full">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
