import React from "react";

const NewsLetterForm = () => {
  return (
    <div className="bg-[#B7EFFF] flex items-center justify-center py-20 px-40 relative  w-full">
      <div className="w-[70%] flex justify-center items-center flex-col">
        <img
          src="/assets/newsHorn.png"
          alt="newsHorn"
          className="w-[25rem] h-[21rem] mr-4 absolute left-4 top-1"
        />
        <div className="flex items-start">
          <div>
            <h2 className="text-[#369FFF] text-[48px] font-semibold">
              दैनिक न्यूज़लेटर प्राप्त करें
            </h2>
            <p className="text-[#007DF1] text-[32px] font-normal">
              विविध समाचारों के साथ, हमारे न्यूज़लेटर में वह सब कुछ है जो आपको
              जानना आवश्यक है
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 w-full justify-center">
          <input
            type="email"
            placeholder="example@mail.com"
            className="border-l-[1px] border-y-[1px] w-[700px] border-[#369FFF] px-4 py-2 text-sm focus:outline-none placeholder-[#369FFF] placeholder:text-[16px]"
          />
          <button className=" py-[4.6px] bg-[#007DF1]/80 text-white text-[19px] font-semibold px-8 ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterForm;
