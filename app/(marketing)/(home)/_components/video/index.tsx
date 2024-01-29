import React from "react";

const VideoSection = () => {
  return (
    <section className="min-w-full h-[calc(100vh-40px)] mt-[-80px] relative">
      <video
        className="w-full h-[100%] object-cover absolute"
        preload="auto"
        autoPlay
        muted
        loop
      >
        <source src="/videos/draft.mp4" />
      </video>
      {/* <div className="absolute max-h-[calc(100vh-150px)] bottom-[20%] left-[50%] translate-y-[50%] translate-x-[-50%]">
    <div className="text-white font-bold text-xl sm:text-4xl md:text-6xl text-center">
      Lorem ipsum dolor sit
    </div>
    <div className="text-[#D7D8D9] mt-6 text-sm sm:text-lg md:text-xl font-normal text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est
      felis, sagittis viverra
    </div>
  </div> */}
    </section>
  );
};

export default VideoSection;
