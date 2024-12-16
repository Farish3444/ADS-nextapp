import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[90vh] w-full bg-cover bg-center bg-no-repeat md:bg-[url('/full.webp')] bg-[url('/mobile.webp')] flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start ">
        {/* Empty Column 1 */}
        <div></div>

     

        {/* Buttons in Column 3 */}
        <div className="flex gap-x-4 justify-center mt-56 mr-8">
          <a
            href="/men"
            className="border border-gray-900 text-gray-900 hover:bg-gray-100 py-3 px-6 text-lg font-semibold  shadow-md transition-transform transform hover:scale-105"
          >
            Shop for kids
          </a>
          <a
            href="/women"
            className="border border-gray-900 text-gray-900 hover:bg-gray-100 py-3 px-6 text-lg font-semibold  shadow-md transition-transform transform hover:scale-105"
          >
            Shop Women
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
