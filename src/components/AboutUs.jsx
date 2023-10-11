import React from "react";

const aboutArray = [
  {
    title: "Filters",
    image: "/Filters.png",
    description:
      "We offer different filters like stations time frames, arrival times and prices",
  },
  {
    title: "Arrived",
    image: "/Arrived.png",
    description:
      "You can Arrive from anywhere using our system without having to be at the station",
  },
  {
    title: "Instant Offer",
    image: "/InstantOffer.png",
    description:
      "This functions will help you increase your chances of getting instant offers",
  },
  {
    title: "Calendar",
    image: "/Calendar.png",
    description:
      "Using our system you can forfeit any unwanted offers directly from our website without having to login into the app",
  },
  {
    title: "Support",
    image: "/Support.png",
    description:
      "We have the best customer support on the market responding fast to any questions or issues",
  },
  {
    title: "Easy to use",
    image: "/EasyToUse.png",
    description:
      "Responsive design and site offering the best experience possible for users",
  },
];
const AboutUs = () => {
  return (
    <section
      id="About Us"
      className="bg-[#1e1e1e] bg-opacity-15 w-screen"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-SpaceGrotesk text-[64px] font-normal text-left text-white mb-3 mt-10">
          Flextron
        </h1>
        <h3 className="font-SpaceGrotesk  text-lg sm:text-3xl font-normal text-left text-white mb-3">
        is easy to use and fully customizable.
        </h3>
        <h4 className="font-SpaceGrotesk text-base sm:text-xl font-normal text-center text-[#848484] mb-10 max-w-[430px]" >
        Here are some our key features and services we offer with your subscription.
        </h4>
      </div>

      <div class="flex flex-wrap justify-evenly w-screen max-w-[1280px] mx-auto ">
        {aboutArray.map((value, index) => (
          <div key={index} class="px-4 py-12 max-w-sm">
            <div class="relative flex rounded-[78px] min-w-sm h-[317px] bg-[#FA9A32] p-8 flex-col">
              <div class="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[184px] h-[184px] mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img src={value.image} className={``} />
              </div>

              <div class="flex flex-col items-center flex-grow mt-28 max-w-[316px]">
                <h2 class="text-white text-lg font-medium mb-4 ">
                  {value.title}
                </h2>
                <p class="leading-relaxed text-base text-white text-center">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
