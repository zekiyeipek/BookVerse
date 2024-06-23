import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-[119px] sm:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
            src="images/img_rectangle10_119x167.png"
            alt="rectangleTen"
          />
        </div>
        <div className="flex flex-col items-center justify-start mb-[564px] mt-[87px] mx-auto w-[39%]">
          <Img
            className="h-[59px]"
            src="images/img_materialsymbolsbook.svg"
            alt="materialsymbols"
          />
          <Img
            className="h-[53px] mt-[38px]"
            src="images/img_fagroup.svg"
            alt="fagroup"
          />
          <Img
            className="h-[63px] mt-[41px]"
            src="images/img_uiscalender.svg"
            alt="uiscalender"
          />
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
