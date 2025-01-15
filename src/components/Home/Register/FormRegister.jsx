"use client";
import Image from "next/image";
import React, { useState } from "react";

import { inputRegister } from "./config";
import { Register } from "@/api/auth/register";
import ModalRegistro from "@/components/Modals/Registro/ModalRegistro";
import useModalStore from "@/hooks/storeOpenModals";

function FormRegister() {
  const { modals, openModal } = useModalStore();
  // Definir el estado inicial del formulario.
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  // Define el estado para los errores del formulario.
  const [errors, setErrors] = useState({});

  // Maneja los cambios en los campos de entrada del formulario.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtiener el nombre y el valor del campo.
    setFormData({
      ...formData,
      [name]: value, // Actualiza el valor del campo correspondiente en el estado.
    });
  };

  // Maneja el envío del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de la página).
    const { nombre, apellido, celular, email, password, password_confirm } =
      formData;

    // Verifica si las contraseñas coinciden.
    if (password !== password_confirm) {
      setErrors({ password_confirm: ["Passwords do not match"] }); // Muestra un error si las contraseñas no coinciden.
      return;
    }

    try {
      // Llama a la función Register para registrar al usuario.
      const success = await Register(
        nombre,
        apellido,
        celular,
        email,
        password,
        password_confirm
      );

      if (success) {
        // Abrir modal so el registro fue exitoso.
        openModal("RegistroExitoso");
      } else {
        // Muestra un error si el registro falló.
        setErrors({ global: ["Error registering user"] });
      }
    } catch (error) {
      // Muestra un error general si ocurre una excepción.
      console.log("Error submitting form: ", error);
      setErrors({
        global: ["Error al registrar el usuario. Intentalo nuevamente"],
      });
    }
  };

  // Genera los campos de entrada del formulario utilizando un map.
  const InputRegister = inputRegister.map(({ title, type, name }) => (
    <div key={title} className="input-field">
      <input
        className="input"
        type={type} // Tipo de entrada (text, number, etc.)
        name={name} // Nombre del campo de entrada.
        inputMode={type === "number" ? "numeric" : "text"} // Establece el modo de entrada según el tipo.
        value={formData[name] || ""} // Establece el valor del campo de entrada desde el estado.
        onChange={handleInputChange} // Llama a handleInputChange cuando el usuario escribe.
        placeholder=" " // Establece un placeholder vacío.
        required // Hace que el campo sea obligatorio.
      />
      <label className="label_name">{title}</label>
      {errors[name] && ( // Muestra un mensaje de error si hay un error para este campo.
        <span className="text-red-500 text-xs font-medium block py-1">
          {errors[name][0]}
        </span>
      )}
    </div>
  ));

  return (
    <div className="hidden bg-white 2xl:flex h-full justify-center items-center w-3/5 ">
      <div className="w-80 h-3/4 p-6 bg-gray-100 rounded-2xl shadow-xl">
        <div className=" flex items-center justify-center">
          <Image
            width={150}
            height={150}
            className="object-contain"
            src="/img/logo-almenu.png"
            alt=""
          />
        </div>
        {/* Formulario de registro */}
        <form onSubmit={handleSubmit}>
          {InputRegister} {/* Renderiza los campos de entrada */}
          {errors.global && ( // Muestra un error global si existe.
            <div className="text-red-500 text-xs font-medium py-2">
              {errors.global[0]}
            </div>
          )}
          <div className="absolute bottom-20 right-[390px]">
            <button
              type="submit"
              className="text-base text-white font-semibold transition scale-105 duration-300 py-2 px-8 flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-500"
            >
              Registrarme
            </button>
          </div>
        </form>
      </div>
      {modals.RegistroExitoso && <ModalRegistro />}
    </div>
  );
}

export default FormRegister; // Exporta el componente para su uso en otras partes de la aplicación.
