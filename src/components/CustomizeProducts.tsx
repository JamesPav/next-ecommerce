import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium">Choose Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer">
          28
        </li>
        <li className="ring-1 ring-black text-white bg-black rounded-md py-1 px-4 text-sm cursor-pointer">
          30
        </li>
        <li className="ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer">
          32
        </li>
        <li className="ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer">
          34
        </li>
        <li className="ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer">
          36
        </li>
        <li className="ring-1 ring-gray-400 bg-gray-400 text-white rounded-md py-1 px-4 text-sm cursor-not-allowed">
          38
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
