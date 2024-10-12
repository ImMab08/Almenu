"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

export function Inicio() {
  const loading = useLoading();
  const { mesas, setMesas, fetchMesas } = useMesaApi();
  const [selectedMesa, setSelectedMesa] = useState(false);

  const { menu, setMenu } = useMenuApi();
  const [selectedCategoria, setSelectedCategoria] = useState();

  const { producto, setProducto } = useProductoApi();

  useEffect(() => {
    fetchMesas();
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

  const handledSelectMesa = (mesa) => {
    setSelectedMesa(mesa);
    if (!producto[mesa.id]) {
      setProducto({
        ...producto,
        [mesa.id]: [],
      });
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
    console.log("id seleccionada", idCategoria);
    setSelectedCategoria(idCategoria); // Actualiza la categoría seleccionada
  };

  const handleProductoSelect = (producto) => {
    const mesaProductos = producto[selectedMesa.id] || [];
    setProducto({
      ...producto,
      [selectedMesa.id]: [
        ...mesaProductos,
        { ...producto, cantidad: 1, total: producto.precio },
      ],
    });
  };

  if (loading) {
    return (
      <div className="w-full h-full flex bg-secondary">
        <div className="w-[70%] h-full"></div>
        <div className="w-[30%] border-primary shadow-lg border-l-[.5px]"></div>
      </div>
    );
  }

  return (
    <section className="w-full h-full flex bg-secondary">
      <div className="w-[70%] h-full">
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
                        >
                          <div className="flex space-x-2">
                            <div className="w-[110px] h-[110px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
                              <IconFood />
                              <span className="absolute rounded-tl-lg p-1 bg-secondary bottom-0 right-0 text-title text-xs">
                                $ {producto.precio}
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
                <div className=" w-[250px] h-[250px] relative flex justify-center">
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
        <div className="flex p-4 space-x-2">
          {mesas.length > 0 ? (
            mesas.map((mesa) => (
              <button
                key={mesa.id}
                className={`relative w-[100px] h-[100px] p-2 flex flex-col items-center rounded-lg ${
                  selectedMesa?.id === mesa.id ? "bg-green-500" : "bg-slate-300"
                }`}
                onClick={() => handledSelectMesa(mesa)}
              >
                <p>Mesa {mesa.numeroMesa}</p>
                {renderIcon(mesa.capacidad)}
              </button>
            ))
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-5">
              <p className="text-base font-semibold text-title">
                ¡Aún no has añadido mesas!
              </p>
              <div className=" w-[250px] h-[250px] relative flex justify-center">
                <Image
                  width={200}
                  height={200}
                  className=" object-contain"
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

      <section className="w-[30%] flex-1 p-5 bg-secondary border-primary shadow-lg border-l-[.5px]">
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
                <span className="text-lg font-normal">Factura</span>
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
                  <tr className="text-subtitle">
                    <td className="py-2">Hamburguesa</td>
                    <td className="py-2">$ 20.000</td>
                    <div className="flex ml-4 space-x-4 py-2">
                      <button className="">-</button>
                      <td className="">2</td>
                      <button>+</button>
                    </div>
                    <td className="py-2 text-center">$ 40.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative bottom-0 flex justify-between">
              <button className="bg-red-500 hover:bg-red-500/80 font-medium text-white mt-2 p-2 rounded">
                Cancelar pedido
              </button>
              <button className="bg-blue-500 hover:bg-green-500 font-medium text-white mt-2 p-2 rounded">
                Generar factura
              </button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
