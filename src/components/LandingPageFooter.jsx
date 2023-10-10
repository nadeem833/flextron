import React from 'react'

const LandingPageFooter = () => {
  return (
   
<footer class="bg-[#1e1e1e] mt-14 sm:h-[286px]">
<div className="p-4 flex items-center h-full">
  <div className="container w-screen max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center">
    
    <div className="flex flex-col items-center space-x-4">
      <img src="/Logo.png" alt="Logo" className="object-contain w-72" />
      <h1 className="text-gray-600 text-center text-2xl font-normal font-Gilroy-Regular">Earn more, wait less</h1>
    </div>

    <div className="mt-4 md:mt-0 h-44 w-44">
      <div className="text-left text-xl font-normal font-Gilroy-Regular text-white">About Us</div>
      <ul className="text-gray-400">
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#Home" className="hover:text-white">Home</a></li>
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#About Us" className="hover:text-white">Features</a></li>
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#Contact Us" className="hover:text-white">Contact Us</a></li>
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#Pricing" className="hover:text-white">Pricing</a></li>
      </ul>
    </div>
    <div className="mt-4 md:mt-0 h-44 w-44">
      <div className="text-left text-xl font-normal font-Gilroy-Regular text-white">Legal</div>
      <ul className="text-gray-400">
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#" className="hover:text-white">Terms of Service</a></li>
        <li className="text-left text-[22px] font-normal font-Gilroy-Regular text-[#6a553d] mb-1"><a href="#" className="hover:text-white">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</div>

</footer>
  )
}

export default LandingPageFooter