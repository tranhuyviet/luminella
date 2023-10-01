import React from "react";
import Link from "next/link";

const AjankohtaistaSection = () => {
  return (
    <section className="sectionWrap  bg-gray-50">
      <h1 className="sectionTitle">Ajankohtaista</h1>
      <div className="mt-10 relative max-w-4xl mx-auto">
        <div className="border w-full shadow-lg bg-primary-700 flex flex-col md:flex-row">
          <img src="/images/rosen.jpg" alt="exu" className="md:w-[480px]" />

          <div className="text-gray-500 py-6 px-6 flex items-center ">
            <div>
              <h2 className="text-2xl font-title font-semibold text-gray-100">
                Rosen kehoterapia (ROSEN METHOD) 75e/h
              </h2>
              <p className="mb-6 md:mb-10 text-lg mt-4 md:mt-6 text-gray-100">
                Tuula Määttä p.050-4944652
              </p>
              <div className="flex flex-col justify-center sm:items-center space-x-0 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href="https://slotti.fi/booking/hyvinvointi-jakauneushoitolaluminella/">
                  <a className="btn-reverse">Netti Ajanvaraus</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AjankohtaistaSection;
