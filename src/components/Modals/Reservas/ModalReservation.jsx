import { IconClose } from '@/icons';
import React from 'react';

export const ModalReservation = ({ reservation, isOpen, onClose }) => {
  if (!reservation || !isOpen) return null;

  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">Detalles de la Reserva</h2>
          <IconClose width={24} height={24} onClick={onClose} className='cursor-pointer' />
        </div>
        <div className="space-y-2">
          <p>
            <strong>Cliente:</strong> {reservation.customerName}
          </p>
          <p>
            <strong>Fecha:</strong> {reservation.start.toLocaleString()}
          </p>
          <p>
            <strong>Mesa:</strong> {reservation.tableNumber}
          </p>
          <p>
            <strong>Descripción:</strong> {reservation.description}
          </p>
        </div>
      </div>
    </div>
  );
};
