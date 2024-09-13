import React from "react";
import MainHeading from "../MainHeading";

const Reels = () => {
  const reelsCard = [
    {
      id: 1,
      imgSrc: "/assets/reel1.png",
      altText: "Suryakumar Yadav",
      text: "Suryakumar Yadav Srilanka के खिलाफ कमाल पारि खेल गये!",
    },
    {
      id: 2,
      imgSrc: "/assets/reel2.png",
      altText: "Actor Vijay Raaz",
      text: "Actor Vijay Raaz के बारे में खुलासा?",
    },
    {
      id: 3,
      imgSrc: "/assets/reel3.png",
      altText: "Rohit Virat",
      text: "Rohit Virat ने T20 World Cup 2024 Final में बड़ा रिकॉर्ड बना दिया!",
    },
    {
      id: 4,
      imgSrc: "/assets/reel4.png",
      altText: "Nawazuddin Siddiqui",
      text: "राजपाल यादव पर बात करते हुए नवाजुद्दीन सिद्दीकी ने क्या बताया?",
    },
    {
      id: 5,
      imgSrc: "/assets/reel5.png",
      altText: "IndvsPak Asia Cup",
      text: "IndvsPak Asia Cup पहले मैच में Pakistan से हरा दिया!",
    },
  ];

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
        {reelsCard.map((card) => (
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
