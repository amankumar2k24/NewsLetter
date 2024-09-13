import React from "react";

const Box = ({
  src,
  altt,
  title,
  description,
  subHeading,
  date,
  titleTextSize,
  descriptionTextSize,
  fontWeightt,
  description2,
  description2TextSize,
  fontWeightt2,
  youtubeIcon,
  borderr,
  borderColor,
}) => {
  return (
    <div className={`flex flex-col gap-1`}>
      <div className={`${borderr && borderColor} relative w-full`}>
        {youtubeIcon && (
          <img
            className="absolute right-4 bottom-4 cursor-pointer"
            src="/assets/yt.png"
            width={40}
            height={40}
            alt="youtube icon"
          />
        )}
        <img
          src={src}
          alt={altt}
          className={` w-full h-full rounded-md mb-4 `}
        />
        {title && (
          <div
            className={`absolute font-semibold w-full bottom-[-6px] flex justify-center`}
          >
            <div
              className={`${titleTextSize} bg-white text-center px-[14px] pt-[8px] border-[0.75px] border-primaryBlack`}
            >
              {title}
            </div>
          </div>
        )}
      </div>
      <p className={`${descriptionTextSize} mt-2 text-center ${fontWeightt}`}>
        {description}
      </p>
      {description2 && (
        <p className={`${description2TextSize} text-center ${fontWeightt2}`}>
          {description2}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 ">
        <div className="text-primaryBlue text-sm relative">
          {subHeading}
          <div className="w-1 h-1 absolute right-[-20%] top-[30%] rounded-full bg-primaryGray"></div>
        </div>
        <div className="text-primaryGray text-sm ml-4">{date}</div>
      </div>
    </div>
  );
};

export default Box;
