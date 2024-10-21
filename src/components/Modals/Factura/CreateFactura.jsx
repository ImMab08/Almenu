import React, { useEffect, useState } from "react";

import jsPDF from "jspdf";
import api from "@/api/api";
import Image from "next/image";

import useModalStore from "@/hooks/storeOpenModals";

export default function CreateFactura({ id_pedido, handleSubmitFactura }) {
  const { closeModal } = useModalStore();

  const [pedido, setPedido] = useState(null); // Guardamos los detalles del pedido
  const [loadingPedido, setLoadingPedido] = useState(true);
  const [totalFactura, setTotalFactura] = useState(0);

  // Obtener detalles del pedido al abrir el modal
  useEffect(() => {
    if (id_pedido) {
      console.log("Id del pedido seleccionado: ", id_pedido);
      const fetchPedido = async () => {
        try {
          const response = await api.get(`/v01/pedido/${id_pedido}`);
          if (response?.data) {
            setPedido(response.data); // Guardar los datos del pedido
            console.log("Datos del pedido: ", response);
            // Calcular el total sumando el precio_total de cada detalle
            const total = response.data.detalles.reduce(
              (sum, item) => sum + item.precio_total,
              0
            );
            setTotalFactura(total); // Guardar el total en el estado
          } else {
            console.log("No se ha encontrado el pedido de esta mesa.");
          }
        } catch (error) {
          console.log("Error al obtener el pedido:", error);
        } finally {
          setLoadingPedido(false); // Cambiar el estado de carga
        }
      };

      fetchPedido();
    }
  }, [id_pedido]); // Se ejecuta cuando cambia el id_pedido

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center py-5">
      <div className="bg-secondary w-auto h-full flex flex-col justify-between overflow-auto rounded-md p-5">
        <div className="flex flex-col items-center">
          <h3 className="text-xl text-title font-semibold text-center">
            Generar Factura
          </h3>
          <div className="w-full my-5 border-b border-white"></div>
        </div>

        <div
          id=""
          className=" w-auto h-full flex flex-col items-center overflow-auto "
        >
          <div className="flex items-center justify-center w-[120px] h-[50px] mobileLG:w-[130px] mobileLG:h-[60px] tablet:w-[150px] tablet:h-[70px] laptop:w-[150px] laptop:h-[68px] relative">
            <Image
              width={150}
              height={120}
              className="object-contain"
              src="/img/logo-almenu.png"
              alt="Logo"
            />
          </div>
          {loadingPedido ? (
            <p>Cargando pedido...</p>
          ) : pedido ? (
            <div>
              <p className="text-title text-sm px-4">Detalles del pedido</p>
              <div className="w-full flex justify-between">
                <p className="text-title text-sm px-4">{pedido.fecha_pedido}</p>
                <p className="text-title text-sm px-4">
                  Mesa {pedido.numeroMesa}
                </p>
              </div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="h-4 px-4 py-2 text-sm text-title text-left">
                      Producto
                    </th>
                    <th className="h-4 px-4 py-2 text-sm text-title text-left">
                      Precio
                    </th>
                    <th className="h-4 px-4 py-2 text-sm text-title text-center">
                      Cantidad
                    </th>
                    <th className="h-4 px-4 py-2 text-sm text-title text-center">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pedido.detalles && pedido.detalles.length > 0 ? (
                    pedido.detalles.map((item) => (
                      <tr key={item.id_factura}>
                        <td className="text-subtitle text-sm px-4 py-2">
                          {item.nombre_producto}
                        </td>
                        <td className="text-subtitle text-sm text-center px-4 py-2">
                          ${" "}
                          {item.precio_unitario.toLocaleString("es-CO", {
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="text-subtitle text-sm text-center px-4 py-2">
                          {item.cantidad}
                        </td>
                        <td className="text-subtitle text-sm text-center px-4 py-2">
                          ${" "}
                          {item.precio_total.toLocaleString("es-CO", {
                            maximumFractionDigits: 2,
                          })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No hay productos en este pedido.</p>
                  )}
                </tbody>
              </table>
              <div className="px-4 mt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-title">Cliente</p>
                  {/* <button className="bg-white px-1 py-[0.5px] rounded-md">+</button> */}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-title">Mesero</p>
                  {/* <button className="bg-white px-1 py-[0.5px] rounded-md">+</button> */}
                </div>
              </div>
              <div className="px-4 mt-2 flex justify-between">
                <p className="text-title">Total factura</p>
                <p className="text-title">
                  ${" "}
                  {totalFactura.toLocaleString("es-CO", {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          ) : (
            <p>No se ha encontrado el pedido.</p>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="py-1 px-3 bg-red-500 hover:bg-red-500/80 rounded-md text-title font-semibold"
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button
            className="py-1 px-3 bg-green-500 hover:bg-green-500/80 rounded-md text-title font-semibold"
            onClick={handleSubmitFactura}
          >
            Generar factura
          </button>
        </div>
      </div>
    </div>
  );
}
