import React from "react";
import Box from "../Box";
import ImgHolder from "../ImgHolder";
import { MukhyaSamaChaarBoxData } from "../../data/data";

const MukhyaSamaChaar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between px-16 py-10">
        <div className="flex-2 rounded-md px-10 text-center leading-[75px] max-w-sm text-[64px] font-bold flex items-center justify-center">
          मुख्य समाचार
        </div>
        {MukhyaSamaChaarBoxData?.map((box) => (
          <div key={box.id} className="flex-2 rounded-md max-w-[18rem]">
            <Box {...box} />
          </div>
        ))}
      </div>
      <ImgHolder srcc="/assets/fiorella.png" altt="fiorella img" />
    </div>
  );
};

export default MukhyaSamaChaar;
