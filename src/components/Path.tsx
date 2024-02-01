import React from "react";
import { PButton } from "@/interface";
const Path = (props: PButton) => {
  return (
    <div className="bg-[#05020D] text-white rounded-[8px] w-[209px] h-[83px] px-5 py-12  flex flex-col   ">
      <div >
        <h1 className="text-[42px] leading-[81.6px] font-[700]  ">
          {props.label}
        </h1>
        <p className="text-[20px] leading-[32.755px] font-[600] ">
          {" "}
          {props.detail}
        </p>
      </div>
    </div>
  );
};

export default Path;
