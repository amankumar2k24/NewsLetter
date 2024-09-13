import React from "react";
import Box from "../Box";
import ImgHolder from "../ImgHolder";

const MukhyaSamaChaarBoxData = [
  {
    id: "1",
    src: "/assets/aapda.png",
    altt: "मन्नु भाकर",
    title: "आपदा",
    titleTextSize: "text-[16px]",
    description: "शिमला, मंडी में बादल फटा: 50 लोग लापता, बचाव कार्य जारी",
    descriptionTextSize: "text-[18px]",
    subHeading: "आस्था प्रज्वल",
    date: "Jul 31",
    fontWeightt: "font-semibold",
  },
  {
    id: "2",
    src: "/assets/raksha.png",
    altt: "मन्नु भाकर",
    title: "रक्षा",
    titleTextSize: "text-[16px]",
    description:
      "जम्मू-कश्मीर के सांबा में अंतरराष्ट्रीय सीमा पर पाकिस्तानी घुसपैठिए को मार गिराया",
    descriptionTextSize: "text-[18px]",
    subHeading: "आस्था प्रज्वल",
    date: "Jul 31",
    fontWeightt: "font-semibold",
  },
  {
    id: "3",
    src: "/assets/olympic.png",
    altt: "मन्नु भाकर",
    title: "ओलंपिक 2024",
    titleTextSize: "text-[16px]",
    description: "भारत के लिए एक और कांस्य, निशानेबाज कुसाले ने रचा इतिहास",
    descriptionTextSize: "text-[18px]",
    subHeading: "आस्था प्रज्वल",
    date: "Jul 31",
    fontWeightt: "font-semibold",
  },
];

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
