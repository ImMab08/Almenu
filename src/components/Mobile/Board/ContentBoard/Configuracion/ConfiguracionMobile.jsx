import React from "react";
import Link from "next/link";

import { IconUpload } from "@/icons";

import { userData, restaurantData } from "./config/inputs";
import { Mesas } from "./Mesas";

export function ConfiguracionMobile() {
  const UserData = userData.map(({ title, required, placeHolder }) => {
    return (
      <div key={title} className="flex flex-col py-2">
        <label className="text-sm font-semibold text-title">
          {title} <span className="text-red-500">{required}</span>
        </label>
        <input
          className="mt-1 border-title border-[1.5px] w-full h-[40px] py-0 p-4 rounded-xl"
          type="text"
          placeholder={placeHolder}
          required
        />
      </div>
    );
  });

  const RestaurantData = restaurantData.map(
    ({ title, required, placeHolder }) => {
      return (
        <div key={title} className="flex flex-col py-2">
          <label className="text-sm font-semibold text-title">
            {title} <span className="text-red-500">{required}</span>
          </label>
          <input
            className="mt-1 border-title border-[1.5px] full h-[40px] py-0 p-4 rounded-xl"
            type="text"
            placeholder={placeHolder}
            required
          />
        </div>
      );
    }
  );

  return (
    <section className="w-full h-auto mt-14 p-5 space-y-5">
      <div className="w-full h-auto grid grid-cols-1 gap-5">
        <div className="w-full h-auto bg-primary rounded-lg p-4 flex flex-col">
          <div className="flex flex-col">{RestaurantData}</div>

          <div className="w-full flex flex-col">
            <div className="w-auto h-full pt-2">
              <p className="text-sm font-semibold text-title">Logo </p>
              <div className="w-[120px] h-[120px] mt-1 flex flex-col items-center justify-center rounded-xl bg-slate-200 border-4 border-dashed border-slate-400 cursor-pointer">
                <IconUpload />
                <p className="text-sm font-semibold text-title">Cargar logo</p>
              </div>
            </div>

            <div className="w-auto mt-10 px-14">
              <button className="flex flex-col bg-slate-200 p-3 rounded-xl cursor-pointer">
                <p className="text-sm text-center font-semibold text-title">
                  Guardar los cambios
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-primary rounded-lg p-4 flex flex-col">
          <div className="flex flex-col">{UserData}</div>

          <div className="w-full flex flex-col">
            <div className="w-auto mt-10 px-14">
              <button className="flex flex-col bg-slate-200 p-3 rounded-xl cursor-pointer">
                <p className="text-sm text-center font-semibold text-title">
                  Guardar los cambios
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Mesas />
    </section>
  );
}
