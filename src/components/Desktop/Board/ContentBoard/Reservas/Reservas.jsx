"use client";

import moment from "moment";
import { messages } from "./config/messages";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useState } from "react";
import { ReservationForm } from "./config/form";
import { ModalReservation } from "@/components/Modals/Reservas/ModalReservation";

moment.locale("es");
const localizer = momentLocalizer(moment);

export function Reservas() {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  const onNavigate = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [setDate]
  );

  const handleSelectEvent = (event) => {
    setSelectedReservation(event);
  };

  const handleCloseModal = () => {
    setSelectedReservation(null);
  };

  const handleCreateReservation = (data) => {
    const newReservation = {
      id: Date.now().toString(),
      title: `${data.customerName} - Mesa ${data.tableNumber}`,
      start: data.date,
      end: addHoursToDate(data.date, 1),
      customerName: data.customerName,
      tableNumber: data.tableNumber,
      description: data.description,
    };

    setReservations([...reservations, newReservation]);
  };

  const addHoursToDate = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
  };

  return (
    <div className="p-5">
      <div className="w-full h-full flex space-x-2">
        <div className="w-3/4 bg-primary p-2 rounded-lg">
          <Calendar
            startAccessor="start"
            endAccessor="end"
            date={date}
            view={view}
            messages={messages}
            localizer={localizer}
            events={reservations}
            onNavigate={onNavigate}
            defaultView={Views.MONTH}
            onView={handleOnChangeView}
            onSelectEvent={handleSelectEvent}
          />
        </div>
        <ReservationForm onSubmit={handleCreateReservation} />
      </div>

      <ModalReservation
        reservation={selectedReservation}
        isOpen={!!selectedReservation}
        onClose={handleCloseModal}
      />
    </div>
  );
}
