import React from "react";
import Box from "../Box";

const contentArray = [
  {
    id: 1,
    title: "भारत की पॉलिटिक्स",
    description:
      '"लोकसभा चुनाव में नहीं हुई इतने लाख वोटों की गिनती"- इस संस्था के दावे के बाद बवाल तय है',
  },
  {
    id: 2,
    title: "खेल",
    description: "गौतम गंभीर आए और टीम इंडिया छा गई, लोग बोले GG का दौर शुरू!",
  },
  {
    id: 3,
    title: "बजट 2024",
    description:
      "क्रेडिट कार्ड से लेकर रसोई गैस और CNG की कीमतों तक, जाने ये पांच बदलाव आपकी जेब पर कितना असर डालेंगे",
  },
];

export const colorItems = [
  { id: "0", color: "#F3D366", value: 0 },
  { id: "1", color: "#B1B1B1", value: 0 },
  { id: "2", color: "#AB8A82", value: 3 },
];

const Main = () => {
  return (
    <div className="flex flex-wrap gap-12 p-6 px-14 justify-between">
      <div className="flex-1 flex flex-col border-[1px] shadow-custom border-[#1A1A1A] items-center w-full p-4 rounded-md max-w-sm">
        <img
          src="/assets/chatbox.png"
          alt="trading"
          className="w-[160px] h-auto rounded-md mb-4"
        />
        <div className="space-y-4 px-8 text-center">
          {contentArray.map((item) => (
            <div key={item.id}>
              <p className="text-sm font-semibold text-primaryGray">
                {item.title}
              </p>
              <p className="text-[18px] font-bold    text-primaryBlack">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-2 rounded-md max-w-2xl">
        <Box
          src="/assets/manuBhakar.png"
          altt="मन्नु भाकर"
          title="ओलंपिक 2024"
          titleTextSize="text-[20px]"
          description="मनु भाकर ने रचा इतिहास, ओलंपिक्स में वो कर दिखाया जो आजतक कोई भारतीय
          नहीं कर पाया"
          descriptionTextSize="text-[34px]"
          subHeading="आस्था प्रज्वल"
          date="Jul 31"
          fontWeightt="font-bold"
        />
      </div>

      <div className="flex-1 space-y-4 max-w-sm">
        <div className="bg-white p-6 rounded-md text-[34px] font-bold shadow-md">
          <h2 className="pt-2">भारत इन ओलंपिक</h2>
          <div className="flex flex-row gap-6">
            {colorItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-row gap-2 justify-center items-center"
              >
                <div className={`bg-[${item.color}] w-6 h-6 rounded-full`} />
                <div className="w-10 h-10">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md">
          <div className="relative border-[#1A1A1A] border-y-2 py-0 pt-4 flex items-center flex-col">
            <div className="absolute top-[13%] ">
              <img
                src="/assets/yellowBg.png"
                className="w-[180px] h-auto rounded-md -z-10"
                alt="shakshaatkar"
              />
            </div>
            <h2 className="text-[34px] font-bold pb-4 z-10">साक्षात्कार</h2>
            <img
              src="/assets/sakshatkaar.png"
              className="w-[180px] h-auto rounded-md z-20"
              alt="shakshaatkar"
            />
          </div>
          <p className="text-[20px] font-semibold text-center py-2">
            यह सुनिश्चित करेंगे कि प्रत्येक दिल्लीवासी के लिए प्रधानमंत्री की
            गारंटी पूरी हो, बांसुरी स्वरांस का वादा।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
