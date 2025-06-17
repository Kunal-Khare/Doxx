import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { IoCodeDownload } from "react-icons/io5";

function Card({data}) {
  return (
    <>
      <div className="w-60 h-80 rounded-[45px] bg-amber-500 text-white px-8 py-10 overflow-hidden relative">
        <FaRegFileCode />

        <p className="text-sm leading-tight mt-5 font-semibold">
         {data.content}
        </p>

        <div className="footer absolute bottom-0  w-full left-0 ">
          <div className="flex items-center justify-between px-8 py-3 mb-5">
            <h5>.10mb</h5>
            <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center ">
              <IoCodeDownload size={"1.1rem"} color="#fff" />
            </span>
          </div>
          <div className="tag w-full py-4 bg-cyan-200 flex items-center justify-center" >
            <h3 className="text-sm text-zinc-900">Download </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
