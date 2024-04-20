/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const Order = ({ tableNumber, handleClose }) => {
  return (
    <div className=" w-full h-full p-5">
      <div className="flex justify-between">
        <h2 className="text-black text-xl font-bold">Pedido Mesa {tableNumber}</h2>
        <Image
          onClick={handleClose}
          width={30}
          height={30}
          className="cursor-pointer"
          src="/img/close.svg"
        />
      </div>
      <p className="text-black text-lg font-medium mt-8">Productos</p>
      {/* Aquí puedes mostrar los productos según la mesa seleccionada */}
      {/* Por simplicidad, puedes usar un array de productos simulado */}
      <div className="mt-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex justify-between items-center my-2">
            <p className="text-black text-lg">Gaseosa Coca-Cola</p>
            <div className="flex justify-center">
              <p className="text-black text-lg mx-2">+</p>
              <p className="text-black text-lg mx-2 text-center">1</p>
              <p className="text-black text-lg mx-2">-</p>
            </div>
            <p className="text-black text-lg">$ 5.000</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
