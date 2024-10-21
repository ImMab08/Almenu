import Image from "next/image";
import React, { useEffect, useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";
import CreateFactura from "@/components/Modals/Factura/CreateFactura";

export default function Pedido({ producto, pedidos, selectedMesa, selectedFactura, handleDeletePedido, handleSubmitDetallesPedido, handledOpenModalFactura, handleSubmitFactura }) {
  const { modals, openModal } = useModalStore();

  return (
    <section className="w-full h-full">
      {!selectedMesa ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className=" w-[250px] h-[250px] relative flex justify-center">
            <Image
              width={200}
              height={200}
              className=" object-contain"
              src="/img/Receipt-rafiki.png"
              alt=""
            />
          </div>
          <div className="w-[200px]">
            <p className=" cursor-default text-sm font-semibold text-title">
              Selecciona una mesa para los productos consumidos.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-between">
          <div className="text-title relative ">
            <div className="flex justify-between">
              <span className="text-lg font-normal">Pedido</span>
              <span className="text-lg font-semibold">
                Mesa {selectedMesa?.numeroMesa}
              </span>
            </div>
            <div className="border-b-2 my-5 "></div>
            <table className="w-full ">
              <thead className="">
                <tr>
                  <th className="h-4 text-left">Producto</th>
                  <th className="h-4 text-left">Precio</th>
                  <th className="h-4 text-center">Cantidad</th>
                  <th className="h-4 text-center">Total</th>
                </tr>
              </thead>
              <tbody className="">
                {producto[selectedMesa.id]?.map((item) => (
                  <tr key={item.id_producto} className="text-subtitle">
                    <td className="py-2">{item.nombre}</td>
                    <td className="py-2">${item.precio}</td>
                    <div className="flex ml-4 space-x-4 py-2">
                      <button className="">-</button>
                      <td className="">{item.cantidad}</td>
                      <button className="">+</button>
                    </div>
                    <td className="py-2 text-center">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative bottom-0 flex justify-between">
            <button
              className="bg-red-500 hover:bg-red-500/80 text-sm font-medium text-white mt-2 p-2 rounded"
              onClick={handleDeletePedido}
            >
              Cancelar pedido
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-500/80 text-sm font-medium text-white mt-2 p-2 rounded"
              onClick={() => handleSubmitDetallesPedido()}
            >
              Generar pedido
            </button>
            <button
              className="bg-green-500 hover:bg-green-500/80 text-sm font-medium text-white mt-2 p-2 rounded"
              onClick={() => handledOpenModalFactura()}
            >
              Generar factura
            </button>
          </div>
        </div>
      )}

      {modals.CreateFactura && <CreateFactura id_pedido={selectedFactura} handleSubmitFactura={handleSubmitFactura} />}
    </section>
  );
}
