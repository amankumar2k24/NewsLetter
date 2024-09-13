import React from "react";

const ImgHolder = ({ srcc, altt }) => {
  return (
    <div>
      <img
        src={srcc}
        alt={altt}
        className="w-[80%] block mx-auto pb-4 h-auto"
      />
    </div>
  );
};

export default ImgHolder;
