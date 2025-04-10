import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-2xl text-gray-200">
            Hi, my name is
          </p>
          <h1 className="text-5xl text-[#a1b49a] font-extrabold mb-4">
            Makinde Mercy Miracle.
          </h1>
          <h1 className="text-5xl text-[#a1b49a] font-extrabold capitalize opacity-[0.7]">
            Technical Content Writer 
          </h1>
          <br />
          <p className="text-xl text-gray-300">
            I create user-friendly technical documentation. My expertise lies in crafting 
            user guides/manuals, technical blog posts, FAQs, and developer resources, including API references, and tutorials that empower users to utilize software products effectively.
            <br />
            <br />
            I am passionate about blockchain technology and web3 and its potential to transform industries. I am dedicated to helping users understand and navigate the complexities of this rapidly evolving field.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center mt-10 md:mt-0 mb-10">
          <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-200 transform transition-transform duration-300 hover:scale-110">
            <img
              src="/assets/mercy.png"
              alt="Profile"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}