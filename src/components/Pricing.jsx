import React from "react";

const pricingArray = [
  {
    title: "One Week",
    image: "/RedCoin.png",
    price: "$40",
    bullets: [
      "Unlimited Capture",
      "I've Arrived",
      "Instant Offers",
      "Calendar",
      "Fast Support",
    ],
  },
  {
    title: "Two Week",
    image: "/Diamond.png",
    price: "$70",
    bullets: [
      "Unlimited Capture",
      "Arrived",
      "Instant Offers",
      "Calendar",
      "Fast Support",
    ],
  },
];
const Pricing = () => {
  return (
    <section id="Pricing" className="bg-black w-screen relative overflow-x-hidden">
      <div class="flex flex-wrap justify-center w-full max-w-[1280px] mx-auto z-10">
        {pricingArray.map((value, index) => (
          <div
            key={index}
            class="px-4 py-12 w-full sm:w-auto flex justify-center"
          >
            <div class="relative flex rounded-[93px] w-full  max-w-[500px] sm:w-[500px] h-auto md:h-[734px] bg-[#FFF] p-10 md:p-20 flex-col items-center justify-center">
              <div class="hidden md:inline-flex absolute top-[-30px] left-[290px] transform -translate-x-1/2 w-full mr-3 items-center justify-end">
                <img src={value.image} className="object-contain w-48 h-w-48" />
              </div>

              <div class="flex flex-col items-start flex-grow w-full">
                <h2 class="font-space-grotesk text-5xl font-normal text-left text-orange-400">
                  {value.title}
                </h2>
                <h3 className="font-Gilroy-Regular text-xl font-normal text-center text-black">
                  3 Days Free Trail
                </h3>
                <h4 className="font-space-grotesk text-lg font-light text-left text-black mt-10">
                  Per Week
                </h4>
                <p class="font-space-grotesk text-5xl font-normal text-left text-black">
                  {value.price}
                </p>

                <ul className="mt-10">
                  {value.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="font-Gilroy-Regular text-lg font-normal text-left text-black list-disc ml-5 mt-4"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="w-full flex justify-center">
                  <button
                    onClick={() => {
                      navigate("sign-up");
                    }}
                    type="button"
                    className="w-[200px]  sm:w-[300px] h-[50px] rounded-[30px] bg-gradient-to-r from-orange-500 to-yellow-400 hover:bg-[#E27A00] focus:outline-none mt-20 "
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
