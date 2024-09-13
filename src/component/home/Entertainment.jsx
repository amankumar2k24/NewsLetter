import React from "react";
import Box from "../Box";
import MainHeading from "../MainHeading";
import { EntertainmentArray, EntertainmentNewsItems } from "../../data/data";

const Entertainment = () => {
  return (
    <div>
      <div>
        <MainHeading
          textt="एंटरटेनमेंट"
          colorr="primaryPurple"
          bgBColor="before:bg-primaryPurple"
          bgRColor="after:bg-primaryPurple"
        />
      </div>

      <div className="w-full flex flex-row gap-12 px-16">
        <div className="flex-2 rounded-md max-w-2xl">
          <Box
            src="/assets/Entertainment.png"
            altt="बॉलीवुड"
            title="बॉलीवुड"
            titleTextSize="text-[20px]"
          />
          <div>
            <p className={`text-[28px] mt-2 font-bold leading-[31px]`}>
              आमिर खान के अकेलेपन पर बोले रणबीर कपूर, मैं उनसे मिला और वो रोने
              लगे
            </p>
            <p className={`text-[24px] font-normal leading-[32px]`}>
              रणबीर कपूर ने बताया कि 16 साल में उन्होंने 20 फिल्में दी हैं. इन
              सालों में उन्होंने जो काम किया उसके लिए वो बहुत खुश हैं. मगर इसके
              पीछे उन्होंने बहुत कुछ कुर्बान भी किया है.
            </p>
            <div className="flex items-center relative gap-2 ">
              <div className="text-primaryBlue text-sm relative">
                आस्था प्रज्वल
                <div className="w-1 h-1 absolute right-[-20%] top-[30%] rounded-full bg-primaryGray"></div>
              </div>
              <div className="text-primaryGray text-sm ml-4">Jul 31</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex flex-row gap-8">
            {EntertainmentArray?.map((entertain) => (
              <div
                key={entertain.id}
                className="flex-1 rounded-md max-w-[21rem] flex flex-row gap-2"
              >
                <Box
                  borderr={entertain.borderr}
                  borderColor={entertain.borderColor}
                  src={entertain.src}
                  altt={entertain.altt}
                  title={entertain.title}
                  titleTextSize={entertain.titleTextSize}
                  description={entertain.description}
                  descriptionTextSize={entertain.descriptionTextSize}
                  fontWeightt={entertain.fontWeightt}
                  description2={entertain.description2}
                  description2TextSize={entertain.description2TextSize}
                  fontWeightt2={entertain.fontWeightt2}
                  subHeading={entertain.subHeading}
                  date={entertain.date}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4">
            <img
              src="/assets/EntertainmentLogo.png"
              alt="logo"
              className="w-6 h-6"
            />
            <p className="font-semibold text-[20px]">मुख्य अंश</p>
          </div>

          <div className="space-y-4">
            {EntertainmentNewsItems?.map((item) => (
              <div key={item.id} className="flex items-start gap-1">
                <span className="w-2 h-2 mt-2 mr-2 bg-purple-600 rounded-full"></span>
                <p className="text-black mt-[2px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
