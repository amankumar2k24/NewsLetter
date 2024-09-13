import React from "react";
import ImgHolder from "../ImgHolder";

const VisualStories = () => {
  return (
   <div>
     <div className="px-16 flex justify-between items-center py-4">
      <p className="text-[126px] max-w-[16rem] text-primaryRed text-right flex items-end font-extrabold">
        विजुअल स्टोरीज
      </p>
      <div>
        <div className="flex flex-row gap-4">
          <div className="max-w-[18rem]">
            <img
              className="w-full h-auto object-cover rounded-md"
              src="/assets/salman.png"
              alt="salman"
            />
            <p className="text-[24px] font-semibold leading-[35px]">
              सलमान और सूरज बड़जात्या फिर से करेंगे साथ काम
            </p>
          </div>
          <div className="max-w-[18rem]">
            <img
              className="w-full h-auto object-cover rounded-md"
              src="/assets/alia.png"
              alt="alia"
            />
            <p className="text-[24px] font-semibold leading-[35px]">
              आलिया भट्ट की 'अल्फा' में नजर आएगा ये हीरो
            </p>
          </div>
          <div className="max-w-[18rem]">
            <img
              className="w-full h-auto object-cover rounded-md"
              src="/assets/auto.png"
              alt="auto"
            />
            <p className="text-[24px] font-semibold leading-[35px]">
              आलिया भट्ट की 'अल्फा' में नजर आएगा ये हीरो
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="py-6 w-full">
      <ImgHolder srcc="/assets/hearClear.png" altt="hearClear" />
    </div>
   </div>
  );
};

export default VisualStories;
