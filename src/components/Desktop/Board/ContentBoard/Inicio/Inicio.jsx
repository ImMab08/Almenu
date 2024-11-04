"use client";
import React, { useEffect, useState } from "react";
import useLoading from "@/hooks/useLoading";

import jsPDF from "jspdf";
import api from "@/api/api";
import Mesas from "./config/Mesas";
import Pedido from "./config/Pedido";

import useProductoApi from "@/api/Conections/ProductoApi";
import useModalStore from "@/hooks/storeOpenModals";

export function Inicio() {
  const loading = useLoading();
  const { producto, setProducto } = useProductoApi();
  const { modals, openModal, closeModal } = useModalStore();

  const [pedidos, setPedidos] = useState({});
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [selectedFactura, setSelectedFactura] = useState();
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [facturaDetails, setFacturaDetails] = useState({ id_cliente: null, id_empleado: null });
  const [id_factura, setIdFactura] = useState(null);
  const [totalFactura, setTotalFactura] = useState(0);

  // Función para crear un pedido de una mesa
  const handleCreatePedido = async (mesa) => {
    const newPedido = {
      estado: "activo",
      id_mesa: parseInt(mesa.id),
    };

    try {
      // Crear el pedido en el backend
      const createPedido = await api.post(`/v01/pedido/create`, newPedido);
      const pedidoId = createPedido.data.id;

      // Actualizar el estado con el nuevo pedido
      const updatedPedidos = {
        ...pedidos,
        [mesa.id]: {
          id: pedidoId,
          estado: "ocupada",
        },
      };
      setPedidos(updatedPedidos);

      // Almacenar en localStorage para persistencia
      localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));
    } catch (error) {
      console.error("Error al crear pedido:", error);
    }
  };

  // Función para manejar la selección de la mesa
  const handleSelectMesa = (mesa) => {
    if (selectedMesa && selectedMesa.id === mesa.id) {
      setSelectedMesa(null);
    } else {
      setSelectedMesa(mesa);

      // Verificar si la mesa ya tiene un pedido
      if (!pedidos[mesa.id]) {
        handleCreatePedido(mesa); // Crear pedido si no existe
      }
    }
  };

  // Función para manejar la selección de categoría
  const handleSelectCategoria = (idCategoria) => {
    setSelectedCategoria(idCategoria);
  };

  // Función para seleccionar un producto y añadirlo a el pedido
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

  // Función para generar un pedido (Detalles del pedido)
  const handleSubmitDetallesPedido = async () => {
    const productosMesa = producto[selectedMesa.id]; // Productos seleccionados para la mesa actual
    const idPedido = pedidos[selectedMesa.id]?.id; // Asegurarse de que el pedido ya esté creado para la mesa
    console.log("IDpedido en detallespedido: ", idPedido);

    if (!productosMesa || productosMesa.length === 0) {
      console.log("No hay productos en el pedido para esta mesa.");
      return;
    }

    // Crear el array de objetos con el formato esperado por el backend (idPedido, id_producto, cantidad)
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

  // Función para eliminar un pedido de una mesa
  const handleDeletePedido = async () => {
    const idpedido = pedidos[selectedMesa.id]?.id;

    if (!idpedido) {
      console.log("No se encontró un pedido para eliminar.");
      return;
    }

    try {
      // Realizar petición DELETE al backend
      await api.delete(`/v01/pedido/delete/${idpedido}`);

      // Actualizar el estado de pedidos eliminando el pedido actual
      const updatedPedidos = { ...pedidos };
      delete updatedPedidos[selectedMesa.id];
      setPedidos(updatedPedidos);

      // Eliminar los productos asociados a la mesa
      const updatedProductos = { ...producto };
      delete updatedProductos[selectedMesa.id];
      setProducto(updatedProductos);

      // Actualizar los localStorage después de eliminar el pedido
      localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));
      localStorage.setItem("producto", JSON.stringify(updatedProductos));

      // Actualizar la mesa seleccionada
      setSelectedMesa(null);

      alert("Pedido cancelado y mesa desocupada.");
    } catch (error) {
      console.error(
        "Error al cancelar el pedido:",
        error.response?.data || error.message
      );
      alert("Error al cancelar el pedido. Inténtalo de nuevo.");
    }
  };

  // Maneja el efecto cuando cambia selectedMesa
  useEffect(() => {
    if (!selectedMesa) {
      // Si la mesa es nula, puedes realizar cualquier limpieza si es necesario
      console.log("Mesa deseleccionada");
    }
  }, [selectedMesa]);

  // Cargar pedidos desde localStorage al cargar la página
  useEffect(() => {
    const storedPedidos = localStorage.getItem("pedidos");
    if (storedPedidos) {
      setPedidos(JSON.parse(storedPedidos));
    } else {
      setPedidos({}); // Asegúrate de que los pedidos sean un objeto vacío si no hay datos
    }

    const storedProductos = localStorage.getItem("producto");
    if (storedProductos) {
      setProducto(JSON.parse(storedProductos));
    } else {
      setProducto({}); // Asegúrate de que los productos sean un objeto vacío si no hay datos
    }
  }, []);

  // Obtener detalles del pedido al abrir el modal
  useEffect(() => {
    // Verifica que selectedFactura esté definida y tenga un id
    const id_pedido = selectedFactura?.id;
    console.log("Id del pedido en prueba: ", id_pedido);

    // Si existe un id_pedido válido, ejecuta la función para obtener los detalles
    if (id_pedido) {
      console.log("Id del pedido seleccionado: ", id_pedido);

      const fetchPedido = async () => {
        try {
          const response = await api.get(`/v01/pedido/${id_pedido}`);
          if (response?.data) {
            setPedidos(response.data); // Guardar los datos del pedido en el estado
            console.log("Datos del pedido: ", response);

            // Verifica que response.data.detalles sea un array
            if (Array.isArray(response.data.detalles)) {
              // Calcular el total sumando el precio_total de cada detalle
              const total = response.data.detalles.reduce(
                (sum, item) => sum + item.precio_total,
                0
              );
              setTotalFactura(total); // Guardar el total en el estado
            } else {
              console.log("No se encontraron detalles del pedido.");
            }
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
  }, [selectedFactura]); // Escucha los cambios en selectedFactura

  // Función para generar el PDF de una factura.
  const generateFacturaPdf = (pedido) => {
    console.log("Pedido recibido para el PDF:", pedido); // Verificar qué se está recibiendo

    if (!pedido || !pedido.detalles || !Array.isArray(pedido.detalles)) {
      console.error(
        "Los detalles del pedido no están disponibles o son inválidos"
      );
      return; // Detén la ejecución si no hay detalles
    }

    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text("Factura", 14, 22);

    // Fecha y Hora
    const fechaHora = new Date().toLocaleString();
    doc.setFontSize(12);
    doc.text(`Fecha y Hora: ${fechaHora}`, 14, 30);

    // Detalles del Pedido
    doc.setFontSize(14);
    doc.text("Detalles del Pedido:", 14, 40);
    let lineHeight = 50;

    // Número de Mesa
    doc.setFontSize(12);
    doc.text(`Mesa: ${pedido.numeroMesa}`, 14, lineHeight);
    lineHeight += 10;

    // Encabezados de Tabla
    doc.text("Producto", 14, lineHeight);
    doc.text("Precio", 80, lineHeight);
    doc.text("Cantidad", 130, lineHeight);
    doc.text("Total", 180, lineHeight);
    lineHeight += 10;

    // Productos
    pedido.detalles.forEach((item) => {
      doc.text(item.nombre_producto, 14, lineHeight);
      doc.text(
        `$ ${item.precio_unitario.toLocaleString("es-CO", {
          maximumFractionDigits: 2,
        })}`,
        79,
        lineHeight
      );
      doc.text(`${item.cantidad}`, 137, lineHeight);
      doc.text(
        `$ ${item.precio_total.toLocaleString("es-CO", {
          maximumFractionDigits: 2,
        })}`,
        177,
        lineHeight
      );
      lineHeight += 8;
    });

    // Datos del cliente y el empleado
    lineHeight += 10;
    doc.text("Cliente: ", 14, lineHeight);
    lineHeight += 10;
    doc.text("Empleado: ", 14, lineHeight);
    lineHeight += 10;

    // Total Factura
    lineHeight += 10;
    const totalFactura = pedido.detalles.reduce(
      (total, item) => total + item.precio_total,
      0
    );
    doc.text(
      `Total Factura: $ ${totalFactura.toLocaleString("es-CO", {
        maximumFractionDigits: 2,
      })}`,
      14,
      lineHeight
    );

    // Guardar PDF
    doc.save(`factura_${pedido.id}.pdf`);
  };

  const handleSubmitFactura = async () => {
    const idPedido = pedidos[selectedMesa?.id]?.id; // Asegúrate de que selectedMesa y pedidos están bien definidos.
    console.log("ID Pedido:", idPedido); // Verifica que obtengas un id de pedido válido.

    const newFactura = {
      id_pedido: idPedido,
      id_cliente: facturaDetails.id_cliente,
      id_empleado: facturaDetails.id_empleado,
    };

    console.log("Datos de la nueva factura:", newFactura); // Verifica que newFactura tenga los valores correctos.

    try {
      const response = await api.post("/v01/factura/create", newFactura);
      const facturaData = response.data;
      console.log("Datos factura", facturaData);
      setIdFactura(facturaData.id);
      console.log("Factura creada correctamente con ID:", facturaData.id);

      try {
        const response = await api.get(`/v01/pedido/${idPedido}`); // Obtener los datos del pedido
        const pedido = response.data;
        console.log("Pedido obtenido: ", pedido);

        if (pedido && Array.isArray(pedido.detalles)) {
          console.log("Detalles del pedido: ", pedido.detalles);

          generateFacturaPdf({
            id: idPedido,
            numeroMesa: selectedMesa?.numero, // Si tienes el número de mesa disponible
            detalles: pedido.detalles, // Pasar los detalles correctamente
          });
        } else {
          console.error("No se encontraron detalles en el pedido.");
        }
      } catch (error) {
        console.error("Error al obtener el pedido para la factura:", error);
      }

      // Actualizar el estado de pedidos eliminando el pedido actual
      const updatedPedidos = { ...pedidos };
      delete updatedPedidos[selectedMesa.id];
      setPedidos(updatedPedidos);

      // Eliminar los productos asociados a la mesa
      const updatedProductos = { ...producto };
      delete updatedProductos[selectedMesa.id];
      setProducto(updatedProductos);

      // Actualizar los localStorage después de eliminar el pedido
      localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));
      localStorage.setItem("producto", JSON.stringify(updatedProductos));

      // Actualizar la mesa seleccionada
      setSelectedMesa(null);
      setFacturaDetails({ id_cliente: null, id_empleado: null });
      setTotalFactura(0);

      closeModal(); // Cerrar el modal después de generar la factura
    } catch (error) {
      console.log("Error al crear la factura:", error);
    }
  };

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
      <div className="w-[64%] h-full items-center justify-center">
        <Mesas
          pedidos={pedidos}
          producto={producto}
          selectedMesa={selectedMesa}
          selectedCategoria={selectedCategoria}
          handleSelectMesa={handleSelectMesa}
          handleSelectCategoria={handleSelectCategoria}
          handleProductoSelect={handleProductoSelect}
        />
      </div>

      <section className="w-[36%] flex-1 p-5 bg-secondary border-primary shadow-lg border-l-[.5px]">
        <Pedido
          pedidos={pedidos}
          producto={producto}
          selectedMesa={selectedMesa}
          selectedFactura={selectedFactura}
          handleDeletePedido={handleDeletePedido}
          handleProductoSelect={handleProductoSelect}
          handledOpenModalFactura={handledOpenModalFactura}
          handleSubmitDetallesPedido={handleSubmitDetallesPedido}
          handleSubmitFactura={handleSubmitFactura}
        />
      </section>
    </section>
  );
}
