import React from "react";
import Main from "../component/home/Main";
import MukhyaSamaChaar from "../component/home/MukhyaSamaChaar";
import Rajneeti from "../component/home/Rajneeti";
import Video from "../component/home/Video";
import VisualStories from "../component/home/VisualStories";
import Sports from "../component/home/Sports";
import Entertainment from "../component/home/Entertainment";
import Reels from "../component/home/Reels";
import NewsLetterForm from "../component/home/NewsLetterForm";

const Home = () => {
  return (
    <div className="bg-backgroundWhite ">
      <div className="max-w-[1536px] container mx-auto">
        <Main />
        <MukhyaSamaChaar />
        <Rajneeti />
        <Video />
        <VisualStories />
        <Sports />
        <Entertainment />
        <Reels />
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default Home;
