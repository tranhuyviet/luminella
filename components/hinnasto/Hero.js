import React from "react";

const Hero = () => {
  return (
    <section className=" relative ">
      <img
        src="/images/hinnasto.webp"
        alt="hero hinnasto"
        className="w-full hidden md:block md:h-[800px] object-bottom object-cover  filter brightness-50 md:brightness-75"
      />
      <div className="md:hidden w-full h-[280px] "></div>
      <div className="absolute inset-0 text-gray-700 md:text-gray-50 text-center">
        <div className="flex flex-col justify-center items-center h-full max-w-4xl mx-auto px-4 relative overflow-hidden">
          {/* <h1 className='sectionTitle'>Hinnasto</h1> */}
          <h1 className="hidden md:inline-block text-6xl font-title tracking-wide drop-shadow-lg uppercase ">
            Hinnasto
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-semibold drop-shadow-lg">
            Arvoisa asiakas!
          </p>
          <p className="text-lg md:text-xl mt-4  drop-shadow-lg">
            Jos et pääse tulemaan sovittuna aikana, pyydämme sinua ilmoittamaan
            siitä viimeistään 24 h / vuorokautta aikaisemmin. Muussa tapauksessa
            joudumme veloittamaan 50 % varaamasi palvelun arvosta.
          </p>

          <img
            src="/images/mandala-3.svg"
            alt="mandala"
            className="absolute md:hidden opacity-[0.20] right-6 translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
