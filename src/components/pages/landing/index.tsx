import React from "react";
import style from "../../../app/styles/index.module.css";

function Landing() {
  return (
    <div className="min-w-[100vw] h-[100vh] flex items-end px-[40px] py-[20px] ">
      <div className={style.main}>
        <div>
          <h1 className=" text-[93px] font-bold">Stan</h1>
          <span className="flex gap-[4px] text-[24px] font-bold items-center">
            <p>Hi, i'm </p>
            <p className={style.name}>Stan</p>
            <p> end developer and user interface designer.</p>
          </span>
        </div>
        <div className="flex align-center gap-[10px] justify-center items-center">
          <div className="circle bg-[#59D382] w-[10px] h-[10px] rounded-full"></div>
          <p>currently available for hire</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
