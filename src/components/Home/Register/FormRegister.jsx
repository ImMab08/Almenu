"use client";
import React, { useState } from "react";
import Image from "next/image";

import { formRegister } from "@/hooks/storeRegister";

import { inputRegister } from "./config";
import { useRouter } from "next/navigation";

function FormRegister() {
  const formData = formRegister((state) => state.formData);
  const setFormData = formRegister((state) => state.setFormData);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData)

    const { nombre, apellido, celular, email, password, password_confirm } = formData;

    if (password !== password_confirm) {
      setErrors({ password_confirm: ["Passwords do not match"] });
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apellido: formData.apellido,
          celular: formData.celular,
          email: formData.email,
          password: formData.password
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.log('Response Error Data:', data);
        setErrors(data);
      } else {
        console.log('Success:', await res.json());
        router.push('/');
      }
    } catch (error) {
      console.log("Error submitting form: ", error);
    }
  };

  const InputRegister = inputRegister.map(({ title, type, name }) => (
    <div key={title} className="input-field">
      <input
        className="input"
        type={type}
        name={name}
        inputMode={type === "number" ? "numeric" : "text"}
        value={formData[name] || ""}
        onChange={handleInputChange}
        placeholder=" "
        required
      />
      <label className="label_name">{title}</label>
      {errors[name] && (
        <span className="text-red-500 text-xs font-medium block py-1">
          {errors[name][0]}
        </span>
      )}
    </div>
  ));

  return (
    <div className="hidden laptop:flex h-full justify-center items-center w-3/5 ">
      <div className="form-register">
        <Image
          width={150}
          height={150}
          className=" object-contain"
          src="/img/logo-almenu.png"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          {InputRegister}
          <div className="button-register">
            <button type="submit">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
