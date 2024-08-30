import React from 'react';

function HeroSection() {
  return (
    <section className="w-full h-[520px] bg-home-banner bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div>
        <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
          Discover Your New Home
        </h1>
      </div>
      <div className="w-full mx-auto mt-6">
        <form>
          <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2">
            <input
              type="text"
              className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
              placeholder="Search by location"
            />
            <button
              type="submit"
              className="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
