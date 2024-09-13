import React from "react";
import MainHeading from "../MainHeading";
import Box from "../Box";
import ImgHolder from "../ImgHolder";
import { rajneetiBoxData, RajneetiNewsData } from "../../data/data";

const Rajneeti = () => {
  

  return (
    <div>
      <MainHeading
        textt="राजनीति"
        colorr="primaryRed"
        bgBColor="before:bg-primaryRed"
        bgRColor="after:bg-primaryRed"
      />
      <section>
        <div className="flex flex-wrap gap-8 p-6 px-14 justify-between">
          <div className=" relative flex-1 flex flex-col items-center w-full p-4 rounded-md max-w-sm">
            <div className="absolute top-0 left-0 right-0 h-2 border-t-[2px] border-[#FBD716]" />
            <img
              src="/assets/Star.png"
              alt="trading"
              className="w-[160px] h-auto rounded-md mb-4 absolute -top-20"
            />
            <div className="space-y-4 px-8 text-center absolute text-[34px] font-semibold w-[130px] leading-10 -top-10">
              ताजा खबर
            </div>
            <div className="flex justify-center gap-4 flex-col mt-20 px-2">
              {RajneetiNewsData?.map((newsItem) => (
                <div
                  key={newsItem.id}
                  className="flex justify-center gap-6 flex-row items-center"
                >
                  <div className="text-[34px]">{newsItem.id}</div>
                  <div className="text-[18px] font-semibold">
                    {newsItem.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 border-b-[2px] border-[#FBD716]" />
          </div>
          <div className="flex-2 rounded-md max-w-2xl">
            <Box
              src="/assets/rajneetiPic.png"
              altt="पॉलिटिक्स"
              title="पॉलिटिक्स"
              titleTextSize="text-[18px]"
              description="खड़गे ने अनुराग ठाकुर की टिप्पणी साझा करने के लिए मोदी की निंदा की"
              descriptionTextSize="text-[34px]"
              fontWeightt="font-bold"
              description2="मल्लिकार्जुन खड़गे ने एक पोस्ट साझा करने के लिए प्रधानमंत्री नरेंद्र मोदी की आलोचना की, जिसमें भाजपा सांसद अनुराग ठाकुर की राहुल गांधी के बारे में कथित जाति संबंधी टिप्पणी शामिल थी"
              description2TextSize="text-[24px]"
              fontWeightt2="font-medium"
              subHeading="आस्था प्रज्वल"
              date="Jul 31"
            />
          </div>

          <div className="flex-1 rounded-md max-w-[18rem] flex flex-col gap-12">
            {rajneetiBoxData?.map((box) => (
              <Box
                borderr={true}
                borderColor="border-[2px] border-primaryRed p-2 rounded-lg"
                key={box.id}
                src={box.src}
                altt={box.altt}
                title={box.title}
                titleTextSize={box.titleTextSize}
                description={box.description}
                descriptionTextSize={box.descriptionTextSize}
                fontWeightt={box.fontWeightt}
                description2={box.description2}
                description2TextSize={box.description2TextSize}
                fontWeightt2={box.fontWeightt2}
                subHeading={box.subHeading}
                date={box.date}
              />
            ))}
          </div>

          <div className="py-6 w-full">
            <ImgHolder srcc="/assets/hearClear.png" altt="hearClear" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rajneeti;
