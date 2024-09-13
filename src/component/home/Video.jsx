import React from "react";
import Box from "../Box";
import ImgHolder from "../ImgHolder";
import { videoData } from "../../data/data";

const Video = () => {
  return (
    <div className="px-16">
      <div className="w-full flex flex-row gap-12 ">
        <div className="flex-2 rounded-md max-w-2xl">
          <Box
            src="/assets/ashnavi.png"
            altt="पॉलिटिक्स"
            title="पॉलिटिक्स"
            titleTextSize="text-[18px]"
            youtubeIcon={true}
          />
        </div>
        <div className="flex-2 max-w-2xl border-b-2 border-primaryGreen relative">
          <div className="text-[104px] text-primaryGreen font-bold">वीडियो</div>
          <div className="h-[2px] absolute top-[15%] w-[50%] right-0 bg-primaryGreen"></div>
          <p className={`text-[32px] mt-2 font-bold`}>
            ट्रैफिक कम होने से रुका ऊना-होशियारपुर रेल प्रोजेक्ट
          </p>

          <p className={`text-[24px] font-medium`}>
            वैष्णव ने कहा, "रेलवे परियोजनाएं क्षेत्रीय रेलवे के अनुसार स्वीकृत
            और निष्पादित की जाती हैं, न कि राज्य/जिला/शहर के अनुसार क्योंकि
            रेलवे परियोजनाएं राज्य की सीमाओं के पार तक फैली हो सकती हैं।"
          </p>
        </div>
      </div>
      <div className="py-8 flex flex-row gap-4 justify-between px-16">
        <div className="flex-1 text-[64px] font-bold text-primaryGreen flex justify-center items-center rounded-md max-w-[16rem] flex-col gap-2">
          <p>और देखें</p>
          <img src="/assets/arrow.png" alt="arrow" />
        </div>
        <div className="flex flex-row gap-16">
          {videoData?.map((video) => (
            <div
              key={video.id}
              className="flex-1 rounded-md max-w-[16rem] flex flex-row gap-2"
            >
              <Box
                borderr={true}
                borderColor="border-[2px] border-primaryGreen p-2 rounded-lg"
                src={video.src}
                altt={video.altt}
                description={video.description}
                descriptionTextSize={video.descriptionTextSize}
                fontWeightt={video.fontWeightt}
                youtubeIcon={video.youtubeIcon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 w-full">
        <ImgHolder srcc="/assets/bestBite.png" altt="bestBite" />
      </div>
    </div>
  );
};

export default Video;
