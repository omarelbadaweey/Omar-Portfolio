

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Back() {
  const naigate = useNavigate();
  return (
    <button
      onClick={() => naigate(-1)}
      className="cursor-pointer z-10 bg-blue-400 text-2xl text-white rounded-4xl px-3 py-1 border-2 border-white absolute top-[105px] right-4"
    >
      <FaArrowAltCircleRight />
    </button>
  );
}

export default Back;
