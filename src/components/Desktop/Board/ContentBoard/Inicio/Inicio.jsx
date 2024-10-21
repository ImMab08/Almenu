"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { jsPDF } from "jspdf";
import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";
import useMesaApi from "@/api/Conections/MesaApi";
import {
  IconFood,
  IconTableFour,
  IconTableHeight,
  IconTableSix,
  IconTableTwo,
} from "../icons";

import api from "@/api/api";
import useLoading from "@/hooks/useLoading";
import useMenuApi from "@/api/Conections/MenuApi";
import useProductoApi from "@/api/Conections/ProductoApi";
import useModalStore from "@/hooks/storeOpenModals";

import CreateFactura from "@/components/Modals/Factura/CreateFactura";

export function Inicio() {
  const loading = useLoading();

  const { modals, openModal } = useModalStore();
  const [factura, setFactura] = useState(null);
  const [selectedFactura, setSelectedFactura] = useState();

  const { mesas, setMesas, fetchMesas } = useMesaApi();
  const [pedidos, setPedidos] = useState({});
  const [selectedMesa, setSelectedMesa] = useState(false);

  const { menu, setMenu } = useMenuApi();
  const [selectedCategoria, setSelectedCategoria] = useState();

  const { producto, setProducto } = useProductoApi();

  // Función para abrir el modal para generar la factura.
  const handledOpenModalFactura = () => {
    const idPedido = pedidos[selectedMesa.id]?.id; // Obtenemos el id del pedido de la mesa seleccionada
    if (idPedido) {
      setSelectedFactura(idPedido); // Establecemos el id de la factura (pedido) seleccionada
      openModal("CreateFactura"); // Abrimos el modal
    } else {
      console.error("No hay pedido asociado a la mesa seleccionada.");
    }
  };

  useEffect(() => {
    fetchMesas();
    // Recuperar los pedidos desde localStorage
    const savedPedidos = localStorage.getItem("pedidos");
    if (savedPedidos) {
      setPedidos(JSON.parse(savedPedidos));
    }
    // Recuperar los productos desde localStorage
    const savedProductos = localStorage.getItem("producto");
    if (savedProductos) {
      setProducto(JSON.parse(savedProductos));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderIcon = (capacidad) => {
    switch (capacidad) {
      case 2:
        return <IconTableTwo />;
      case 4:
        return <IconTableFour />;
      case 6:
        return <IconTableSix />;
      case 8:
        return <IconTableHeight />;
      default:
        return null;
    }
  };

  // Crear un pedido.
  const [estadoPedido, setEstadoPedido] = useState("en proceso");

  // Función para crear el pedido.
  const handleSubmitPedido = async (mesaId) => {
    const newPedido = {
      estado: estadoPedido,
      id_mesa: parseInt(mesaId),
    };

    try {
      console.log("Datos del pedido a enviar:", newPedido);
      const createPedido = await api.post(`/v01/pedido/create`, newPedido);
      const pedidoId = createPedido.data.id;

      // Actualiza el estado local
      const updatedPedidos = {
        ...pedidos,
        [mesaId]: {
          id: pedidoId,
          estado: "ocupada",
        },
      };
      setPedidos(updatedPedidos);

      // Guarda en localStorage
      localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));

      console.log("Pedido creado con éxito para la mesa:", mesaId);
    } catch (error) {
      console.error("Error al crear pedido:", error);
    }
  };

  // Función para que cuando se selecciona una mesa, se cree el pedido.
  const handledSelectMesa = (mesa) => {
    setSelectedMesa(mesa);

    // Si la mesa tiene un ID válido, llama directamente a handleSubmitPedido
    if (mesa && mesa.id) {
      console.log("ID de la mesa seleccionada:", mesa.id); // Verificar el ID

      // Verificar si ya hay un pedido para esta mesa
      if (!pedidos[mesa.id]) {
        handleSubmitPedido(mesa.id); // Pasa el ID de la mesa para crear el pedido
      }
    } else {
      console.error("Mesa seleccionada no tiene ID válido:", mesa);
    }
  };

  // Llama a fetchMenu cada vez que cambia la categoría seleccionada
  useEffect(() => {
    const fetchMenu = async (idCategoria) => {
      try {
        const response = await api.get(
          `/v01/menu/usuario/${idCategoria}/productos`
        );

        if (response.status === 200) {
          setMenu(response.data);
          console.log("Datos enviados", response.data);
        } else {
          throw new Error("Error al obtener el menú.");
        }
      } catch (error) {
        console.error("Error al obtener el menú del usuario:", error); // Muestra detalles del error
      }
    };

    if (selectedCategoria) {
      fetchMenu(selectedCategoria);
    }
  }, [selectedCategoria, setMenu]);

  // Función que se pasa al componente ProductsBoard para capturar la categoría seleccionada
  const handleCategoriaSelect = (idCategoria) => {
    setSelectedCategoria(idCategoria); // Actualiza la categoría seleccionada
  };

  const handleProductoSelect = (productoSeleccionado) => {
    const mesaProductos = producto[selectedMesa.id] || [];
    const existingProduct = mesaProductos.find(
      (p) => p.id_producto === productoSeleccionado.id_producto
    );

    if (existingProduct) {
      // Si el producto ya existe, incrementa la cantidad
      setProducto((prevProducto) => {
        const updatedProductos = {
          ...prevProducto,
          [selectedMesa.id]: mesaProductos.map((p) =>
            p.id_producto === productoSeleccionado.id_producto
              ? {
                  ...p,
                  cantidad: p.cantidad + 1,
                  total: (p.cantidad + 1) * productoSeleccionado.precio,
                }
              : p
          ),
        };

        // Guardar en localStorage
        localStorage.setItem("producto", JSON.stringify(updatedProductos));
        return updatedProductos;
      });
    } else {
      // Si es un producto nuevo, agrégalo al estado
      setProducto((prevProducto) => {
        const updatedProductos = {
          ...prevProducto,
          [selectedMesa.id]: [
            ...mesaProductos,
            {
              ...productoSeleccionado,
              cantidad: 1,
              total: productoSeleccionado.precio,
            },
          ],
        };

        // Guardar en localStorage
        localStorage.setItem("producto", JSON.stringify(updatedProductos));
        return updatedProductos;
      });
    }
  };

  // Función para generar el PDF
  const generatePDF = (pedido) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Reporte de Pedido", 14, 22);
    const fechaHora = new Date().toLocaleString();
    doc.setFontSize(12);
    doc.text(`Fecha y Hora: ${fechaHora}`, 14, 30);
    doc.setFontSize(14);
    doc.text("Detalles del Pedido:", 14, 40);

    let lineHeight = 50;
    pedido.productos.forEach((producto) => {
      doc.text(
        `${producto.nombre} - Cantidad: ${producto.cantidad}`,
        14,
        lineHeight
      );
      lineHeight += 10;
    });

    doc.save(`pedido_${pedido.id}.pdf`);
  };

  const handleSubmitDetallesPedido = async () => {
    const productosMesa = producto[selectedMesa.id]; // Productos seleccionados para la mesa actual
    const idPedido = pedidos[selectedMesa.id]?.id; // Asegurarse de que el pedido ya esté creado para la mesa
    console.log("IDpedido en detallespedido: ", idPedido);

    if (!productosMesa || productosMesa.length === 0) {
      console.log("No hay productos en el pedido para esta mesa.");
      return;
    }

    // Crear el array de objetos con el formato esperado por el backend (id_pedido, id_producto, cantidad)
    const detallesPedido = productosMesa.map((p) => ({
      id_pedido: idPedido, // Referencia al pedido que ya está creado
      id_producto: p.id_producto,
      cantidad: p.cantidad,
    }));

    try {
      console.log("Detalles del pedido: ", detallesPedido);

      // Enviar los detalles del pedido a la API
      const response = await api.post(
        "/v01/detallespedido/create",
        detallesPedido
      );
      console.log("Detalles del pedido enviados: ", detallesPedido);

      if (response.status === 201) {
        console.log(
          "Detalles del pedido guardados correctamente:",
          response.data
        );
        generatePDF({
          id: idPedido,
          productos: productosMesa,
        });
      } else {
        throw new Error("Error al guardar los detalles del pedido");
      }
    } catch (error) {
      console.error("Error al enviar los detalles del pedido:", error);
    }
  };

  const hanldeDeletePedido = async () => {
    const idpedido = pedidos[selectedMesa.id]?.id;

    try {
      // Realizar petición DELETE al backend
      await api.delete(`/v01/pedido/delete/${idpedido}`);

      // Actualizar el estado de pedidos eliminando el pedido actual
      const updatedPedidos = { ...pedidos };
      delete updatedPedidos[selectedMesa.id];
      setPedidos(updatedPedidos); // Actualizar el estado con el pedido eliminado

      // Eliminar los productos asociados a la mesa
      const updatedProductos = { ...producto };
      delete updatedProductos[selectedMesa.id];
      setProducto(updatedProductos); // Actualizar el estado de los productos

      // Eliminar del localStorage los detalles del pedido y los productos de la mesa
      localStorage.removeItem("detallesPedido");
      localStorage.setItem("producto", JSON.stringify(updatedProductos));

      // Actualizar la mesa seleccionada
      setSelectedMesa(null);

      alert("Pedido cancelado y mesa desocupada.");
    } catch (error) {
      console.log("Error al cancelar el pedido. Inténtalo de nuevo.", error);
    }
  };

  useEffect(() => {
    const mesas = JSON.parse(localStorage.getItem("pedidos"));
    if (mesas) {
      setMesas(mesas); // Actualiza el estado de las mesas en tu componente principal
    }
  }, [localStorage.getItem("pedidos")]);

  if (loading) {
    return (
      <div className="w-full h-full flex bg-secondary">
        <div className="w-[65%] h-full"></div>
        <div className="w-[35%] border-primary shadow-lg border-l-[.5px]"></div>
      </div>
    );
  }

  return (
    <section className="w-full h-full flex bg-secondary">
      <div className="w-[64%] h-full">
        {!selectedMesa ? null : (
          <ProductsBoard
            handleCategoriaSelect={handleCategoriaSelect}
            handleProductoSelect={handleProductoSelect}
          />
        )}
        {selectedCategoria && (
          <div className="relative z-10 w-full h-full bg-secondary p-2 overflow-auto pb-5">
            {menu.length > 0 ? (
              menu.map((subcategoria) => (
                <div key={subcategoria.idSubcategoria}>
                  <div className="pb-2">
                    <h2 className="text-xl text-title font-semibold">
                      {subcategoria.nombreSubcategoria}
                    </h2>
                  </div>
                  <div className="grid grid-cols-3 mb-5 gap-2">
                    {subcategoria.productosDTO.length > 0 ? (
                      subcategoria.productosDTO.map((producto) => (
                        <div
                          key={producto.id_producto}
                          className=" cursor-pointer hover:bg-primary/30 p-2 rounded-lg"
                          onClick={() => handleProductoSelect(producto)}
                        >
                          <div className="flex space-x-2">
                            <div className="w-[110px] h-[110px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
                              <IconFood />
                              <span className="absolute rounded-tl-lg p-1 bg-secondary bottom-0 right-0 text-title text-xs">
                                $
                                {producto.precio.toLocaleString("es-CO", {
                                  maximumFractionDigits: 2,
                                })}
                              </span>
                            </div>
                            <div className="max-w-[180px] space-y-2">
                              <h3 className="text-lg text-title">
                                {producto.nombre}
                              </h3>
                              <p className="text-[10px] text-subtitle">
                                {producto.descripcion}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>
                        <p className="text-subtitle font-normal">
                          No has añadido productos para esta Subcategoria.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-[250px] h-[250px] relative flex justify-center">
                  <Image
                    width={300}
                    height={300}
                    className=" object-contain"
                    src="/img/NotFoundProductos.png"
                    alt=""
                  />
                </div>
                <p className="text-subtitle font-normal">
                  No has añadido subcategorias y productos para esta categoría.
                </p>
              </div>
            )}
          </div>
        )}
        <div className="w-full h-full p-4">
          {mesas.length > 0 ? (
            <div className="w-full h-full grid grid-cols-8 grid-rows-5 items-center justify-center">
              {mesas.map((mesa) => (
                <button
                  key={mesa.id}
                  className={`relative w-[100px] h-[100px] p-2 flex flex-col items-center rounded-lg ${
                    selectedMesa?.id === mesa.id
                      ? "bg-green-500" // Mesa seleccionada
                      : pedidos[mesa.id] &&
                        pedidos[mesa.id].estado === "ocupada"
                      ? "bg-yellow-500 hover:bg-yellow-500/80" // Mesa ocupada con pedido activo
                      : "bg-slate-300 hover:bg-slate-300/80" // Mesa disponible
                  }`}
                  onClick={() => handledSelectMesa(mesa)}
                >
                  <p>Mesa {mesa.numeroMesa}</p>
                  {renderIcon(mesa.capacidad)}
                </button>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-5">
              <p className="text-base font-semibold text-title">
                ¡Aún no has añadido mesas!
              </p>
              <div className="w-[250px] h-[250px] relative flex justify-center">
                <Image
                  width={200}
                  height={200}
                  className="object-contain"
                  src="/img/Questions-amico.png"
                  alt=""
                />
              </div>
              <p className="text-sm text-title">
                Da{" "}
                <Link
                  className="underline text-title"
                  href="/configuracion/#mesas"
                >
                  click aquí
                </Link>{" "}
                para comenzar.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="w-[36%] flex-1 p-5 bg-secondary border-primary shadow-lg border-l-[.5px]">
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
                onClick={hanldeDeletePedido}
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
                onClick={() => handledOpenModalFactura(factura)}
              >
                Generar factura
              </button>
            </div>
          </div>
        )}

        {modals.CreateFactura && <CreateFactura id_pedido={selectedFactura} />}
      </section>
    </section>
  );
}
