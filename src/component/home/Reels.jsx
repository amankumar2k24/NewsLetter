import React from "react";
import MainHeading from "../MainHeading";
import { reelsCard } from "../../data/data";

const Reels = () => {
  return (
    <div>
      <div>
        <MainHeading
          textt="रील्स "
          colorr="primaryRed"
          bgBColor="before:bg-primaryRed"
          bgRColor="after:bg-primaryRed"
        />
      </div>

      <div className="w-full flex flex-row gap-8 px-16 justify-between">
        {reelsCard?.map((card) => (
          <div key={card.id} className="flex flex-col items-start w-[250px]">
            <img
              src={card.imgSrc}
              alt={card.altText}
              className="w-[250px] h-[400px] rounded-lg"
            />
            <p className="mt-4 text-[22px] font-semibold leading-[28px] text-left">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
