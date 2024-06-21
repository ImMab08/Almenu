import React from "react";
import { IconCheckPlans } from "../Hero/Icons";

function Pricing() {
  return (
    <section className="py-5 px-5 sm:px-20 w-full h-auto bg-secondary">
      <section className="flex flex-col items-center mt-10 mb-32">
        <div className="mb-10 space-y-2">
          <h2 className="text-5xl sm:text-8xl text-primary font-bold ">Planes</h2>
          <p className="text-white text-xs sm:text-sm text-center">Hechos y pensados para ti. 🤍</p>          
        </div>

        <div className="w-auto h-auto grid grid-cols-1 space-y-5 sm:grid-cols-3 sm:space-y-0 sm:space-x-5">
          <div className="container-precio py-5 px-8 sm:py-10 sm:px-12 bg-primary rounded-2xl space-y-8  flex flex-col justify-between shadow-xl sm:transform sm:translate-y-10">
            <div className=" space-y-8">
              <div className=" border-b border-gray-300 pb-5 space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm text-gray-500 font-base">Plan Basic</h3>
                <h2 className="text-3xl sm:text-4xl font-bold">Gratis</h2>
              </div>

              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-5 flex justify-center">
              <button className="py-2 px-20 bg-secondary rounded-full text-primary text-lg">
                Cotizar
              </button>
            </div>
          </div>

          <div className="container-precio py-5 px-8 sm:py-10 sm:px-12 bg-primary rounded-2xl space-y-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-8">

              <div className=" border-b border-gray-300 pb-5 space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm text-gray-500 font-base">Plan Advance</h3>
                <h2 className="text-3xl sm:text-4xl font-bold">$ 100.000<span className="text-sm text-gray-500">/mes</span></h2>
              </div>


              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-5 flex justify-center">
              <button className="py-2 px-20 bg-secondary rounded-full text-primary text-lg">
                Cotizar
              </button>
            </div>
          </div>

          <div className="container-precio py-5 px-8 sm:py-10 sm:px-12 bg-primary rounded-2xl space-y-8 flex flex-col justify-between shadow-xl sm:transform sm:translate-y-10">
            <div className="space-y-8">
              <div className=" border-b border-gray-300 pb-5 space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-sm text-gray-500 font-base">Plan Premium</h3>
                <h2 className="text-3xl sm:text-4xl font-bold">$ 50.000<span className="text-sm text-gray-500">/mes</span></h2>
              </div>

              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-secondary p-[1px] sm:p-[2px] rounded-full">
                    <IconCheckPlans />
                  </div>
                  <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-5 flex justify-center">
              <button className="py-2 px-20 bg-secondary rounded-full text-primary text-lg">
                Cotizar
              </button>
            </div>
          </div>

        </div>

        <div className="mt-32 sm:w-3/4 flex flex-col items-center space-y-5">
          <p className="text-white font-bold text-lg sm:text-xl text-center">¿No encuentras algo que se adapte a ti?</p>
          <div className="flex flex-col items-center">
            <p className="text-white text-sm sm:text-base text-center">¡No te preocupes!</p>
            <p className="text-white text-sm sm:text-base text-center sm:w-2/4">Contacta a un asesor y te brindaremos toda una atención personalizada donde escucharemos, guiaremos y te brindaremos una alternativa más <span className="font-bold">personalizada.</span></p>
          </div>
          <a className="text-white text-base hover:underline font-semibold" href="">¡Haz click aqui!</a>
        </div>
      </section>
    </section>
  );
}

export { Pricing };