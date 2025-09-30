import React from "react";

function FixedHeader() {
  return (
    <div>
      <marquee className="h-[40px] bg-[#001a35] w-[100%] content-center fixed top-0 z-20">
        <p className="w-[fit-content] px-2 font-semibold bg-blue-400 rounded-2xl uppercase tracking-[2px] text-amber-50">
          omar portfolio
        </p>
      </marquee>
    </div>
  );
}

export default FixedHeader;