import React from "react";
import MainHeading from "../MainHeading";
import Box from "../Box";
import ImgHolder from "../ImgHolder";

const Sports = () => {
  const sportsArticlesArray = [
    {
      id: 1,
      borderr: true,
      borderColor: "border-[2px] border-primarySky p-2 rounded-lg",
      src: "/assets/sport1.png",
      altt: "sports",
      title: "ओलंपिक 2024",
      titleTextSize: "text-[16px]",
      description: "भारतीय पुरुष हॉकी को बेल्जियम के खिलाफ पहली हार का सामना",
      descriptionTextSize: "text-[20px]",
      fontWeightt: "font-semibold",
      description2:
        "अभिषेक ने 18वें मिनट में भारत को बढ़त दिलायी जिसके बाद बेल्जियम ने हाफ टाइम के",
      description2TextSize: "text-[16px]",
      fontWeightt2: "font-normal",
      subHeading: "आस्था प्रज्वल",
      date: "Jul 31",
    },
    {
      id: 2,
      borderr: true,
      borderColor: "border-[2px] border-primarySky p-2 rounded-lg",
      src: "/assets/sport2.png",
      altt: "sports",
      title: "ओलंपिक 2024",
      titleTextSize: "text-[16px]",
      description:
        "होने वाली मां-तलवारबाजी स्टार ने ओलंपिक में सभी बाधाओं को हराया",
      descriptionTextSize: "text-[20px]",
      fontWeightt: "font-semibold",
      description2:
        "मिस की फ्रेंच माजा होवदां पेरिस 2024 ओलंपिक में साल महंगी की गर्भवती रहते हुए",
      description2TextSize: "text-[16px]",
      fontWeightt2: "font-normal",
      subHeading: "आस्था प्रज्वल",
      date: "Jul 31",
    },
    {
      id: 3,
      borderr: true,
      borderColor: "border-[2px] border-primarySky p-2 rounded-lg",
      src: "/assets/sport3.png",
      altt: "sports",
      title: "ओलंपिक 2024",
      titleTextSize: "text-[16px]",
      description:
        "मेरे को ये बेट देगा क्या? सचिन का ये किस्सा सुनकर दंग रह जाएंगे आप!",
      descriptionTextSize: "text-[20px]",
      fontWeightt: "font-semibold",
      description2: "जड़ा भगवान ने किया टेबल के खेल पांच बल्लों का सौदा",
      description2TextSize: "text-[16px]",
      fontWeightt2: "font-normal",
      subHeading: "आस्था प्रज्वल",
      date: "Jul 31",
    },
  ];

  const medalWinners = [
    {
      id: 1,
      name: "मनु भाकर",
      event: "10 मीटर शूटिंग",
      imageSrc: "/assets/padak1.png",
      altText: "Manu Bhaker",
      borderClass: "border-4 border-[#CC8C47]",
      textClass: "font-semibold text-[18px]",
      descriptionClass: "text-[#5D5D5D]",
    },
    {
      id: 2,
      name: "स्वप्निल कुसाले",
      event: "50 मीटर शूटिंग",
      imageSrc: "/assets/padak2.png",
      altText: "Swapnil Kusale",
      borderClass: "border-4 border-[#CC8C47]",
      textClass: "font-semibold text-[18px]",
      descriptionClass: "text-[#5D5D5D]",
    },
    {
      id: 3,
      name: "मनु भाकर - सरबजोत सिंह",
      event: "टीम 10 मीटर शूटिंग",
      imageSrc: "/assets/padak3.png",
      altText: "Manu Bhaker and Sarabjot Singh",
      borderClass: "border-4 border-[#CC8C47]",
      textClass: "font-semibold text-[18px]",
      descriptionClass: "text-[#5D5D5D]",
    },
  ];

  return (
    <div>
      <div>
        <MainHeading
          textt="स्पोर्ट्स"
          colorr="primarySky"
          bgBColor="before:bg-primarySky"
          bgRColor="after:bg-primarySky"
        />
      </div>

      <div className="w-full flex flex-row gap-12 px-16">
        <div className="flex-2 rounded-md max-w-2xl">
          <Box
            src="/assets/sports.png"
            altt="ओलंपिक 2024"
            title="ओलंपिक 2024"
            titleTextSize="text-[20px]"
          />
        </div>
        <div className="flex-2 rounded-md max-w-[21rem]">
          <div>
            <p className={`text-[28px] mt-2 font-bold`}>
              भारत के ऐतिहासिक एकल टेबल टेनिस अभियान का समापन
            </p>
            <p className={`text-[24px] font-normal`}>
              पेरिस ओलंपिक में भारत की ऐतिहासिक एकल टेबल टेनिस यात्रा समाप्त हो
              गई क्योंकि मनिका बत्रा को उच्च रैंकिंग वाले जापानी मियू हिरानो के
              खिलाफ हार का सामना करना पड़ा, हार गईं।
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
        {/* 3rd  */}
        <div className="flex-2 rounded-md max-w-[21rem] relative mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md border-[1.5px] border-[#FBD716]">
            <div className="absolute -top-10">
              <div class="banner-container">
                <div class="banner-text">पदक विजेता</div>
              </div>
            </div>
            <div className="mt-10">
              {medalWinners?.map((winner) => (
                <div
                  key={winner.id}
                  className="flex items-center border-b border-gray-300 pb-4 mb-4"
                >
                  <img
                    src={winner.imageSrc}
                    alt={winner.altText}
                    className={`w-12 h-12 rounded-full mr-4 ${winner.borderClass}`}
                  />
                  <div>
                    <div className={winner.textClass}>{winner.name}</div>
                    <div className={winner.descriptionClass}>
                      {winner.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-8 flex flex-row gap-4 justify-between px-16 ">
          <div className="flex-1 max-w-[20rem] flex-col gap-4 border-y-2 border-primarySky py-4 ">
            <img src="/assets/comma1.png" alt="comma" className="w-10 h-10 " />
            <p className="px-10 text-[32px] font-semibold text-black">
              अभ्यास हमेशा पूर्ण नहीं होता - यही कारण है कि आप ओलंपिक में नहीं
              हैं
            </p>
            <div className="w-full flex justify-end items-end">
              <img
                src="/assets/comma2.png"
                alt="comma"
                className="w-10 h-10 flex justify-end items-end"
              />
            </div>
            <p className="text-primarySky w-full text-center">आस्था प्रज्वल</p>
          </div>
          <div className="flex flex-row gap-16">
            {sportsArticlesArray?.map((article) => (
              <div className="flex-1 rounded-md max-w-[18rem] flex flex-row gap-2">
                <Box
                  key={article.id}
                  borderr={article.borderr}
                  borderColor={article.borderColor}
                  src={article.src}
                  altt={article.altt}
                  title={article.title}
                  titleTextSize={article.titleTextSize}
                  description={article.description}
                  descriptionTextSize={article.descriptionTextSize}
                  fontWeightt={article.fontWeightt}
                  description2={article.description2}
                  description2TextSize={article.description2TextSize}
                  fontWeightt2={article.fontWeightt2}
                  subHeading={article.subHeading}
                  date={article.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 w-full">
        <ImgHolder srcc="/assets/fiorella.png" altt="fiorella" />
      </div>
    </div>
  );
};

export default Sports;
