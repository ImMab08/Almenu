"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { es } from 'date-fns/locale';
import { Toaster, toast } from "sonner";

import "react-datepicker/dist/react-datepicker.css";

export const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: new Date(),
    customerName: '',
    tableNumber: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: new Date(),
      customerName: '',
      tableNumber: '',
      description: '',
    })
  };

  return (
    <div className="w-1/4 bg-primary p-2 rounded-lg space-y-5">
      <h2 className="text-center text-text text-lg font-semibold">Nueva Reserva</h2>
      <form onSubmit={handleSubmit} action="">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-text" htmlFor="">Fecha y hora</label>
            <DatePicker
              id=""
              type="text"
              name=""
              locale={es}
              selected={formData.date}
              onChange={handleDateChange}
              showTimeSelectdateFormat="MMMM d, yyyy h:mm aa"
              className="w-full p-2 border-border border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-text" htmlFor="">Nombre del cliente</label>
            <input
              required
              type="text"
              id="customerName"
              name="customerName"
              onChange={handleChange}
              value={formData.customerName}
              className="border-border border rounded h-8 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-text" htmlFor="">Número mesa</label>
            <input
              min={1}
              required
              type="number"
              id="tableNumber"
              name="tableNumber"
              onChange={handleChange}
              value={formData.tableNumber}
              className="border-border border rounded h-8 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-text" htmlFor="">Observaciones</label>
            <textarea
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              value={formData.description}
              className="border-border border rounded h-48 px-2"
            />
          </div>
        </div>

        <Toaster position="bottom-center" richColors closeButton />
        <button type="submit" className="bg-text hover:bg-text/90 text-white w-full py-2 rounded-md mt-10" onClick={() => toast.success('Reserva creada con éxito')}>
          Realizar reserva
        </button>
      </form>
    </div>
  );
};
