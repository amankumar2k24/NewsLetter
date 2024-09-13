import React from "react";

const MainHeading = ({ colorr, bgBColor, bgRColor, textt }) => {
  return (
    <div className="flex justify-center relative py-10">
      <h2
        className={`text-[108px] rajneeti font-extrabold text-${colorr} before:content-[''] ${bgBColor} before:absolute before:w-[32%] before:h-[2px] ${bgRColor} before:left-[0px] before:top-1/2 after:content-[''] after:absolute after:w-[32%] after:h-[2px] after:${colorr} after:right-[0px] after:top-1/2`}
      >
        {textt}
      </h2>
    </div>
  );
};

export default MainHeading;
