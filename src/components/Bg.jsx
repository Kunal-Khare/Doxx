import React from "react";

function Bg() {
  return (
    <div className=" fixed z-[2] w-full h-screen">
      <div className=" absolute top-[5%] w-full py-10 flex justify-center items-center text-zinc-500 text-2xl">
        ドキュメント.
      </div>
      <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none tracking-tighter font-semibold text-zinc-500 ">
        Doxx.
      </h1>
    </div>
  );
}

export default Bg;
