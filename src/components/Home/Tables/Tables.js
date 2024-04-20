/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import Order from '@/components/Shared/Order/Order';

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [selectedTableIndex, setSelectedTableIndex] = useState(null);

  const handleTableClick = (tableId) => {
    // Verificar si se hace clic en la mesa seleccionada para cerrar la factura
    if (selectedTableIndex === tableId) {
      setSelectedTableIndex(null); // Cerrar la factura
    } else {
      // Marcar la mesa seleccionada y desmarcar las demás
      const updatedTables = tables.map((table) => ({
        ...table,
        selected: table.id === tableId,
      }));

      setTables(updatedTables);
      setSelectedTableIndex(tableId); // Actualizar el índice de la mesa seleccionada
    }
  };

  const handleCloseOrder = () => {
    setSelectedTableIndex(null); // Cerrar la factura
    // Desmarcar la mesa seleccionada
    const updatedTables = tables.map((table) => ({
      ...table,
      selected: false,
    }));

    setTables(updatedTables);
  };

  const handleAddTable = () => {
    const newTableId = tables.length + 1;
    const newTableName = `Mesa ${newTableId}`;
    const newTable = { id: newTableId, name: newTableName, selected: false };

    setTables([...tables, newTable]);
  };

  return (
    <section className='flex'>
      <div className={` w-[65%] grid grid-cols-5 items-start p-10 gap-5`}>        
        {tables.map((table) => (
          <div key={table.id} className={`flex flex-col w-[150px] h-[150px] justify-center items-center p-2 border-2 border-black rounded-md ${ table.selected ? 'bg-green-200' : '' }`} onClick={() => handleTableClick(table.id)}>
            <h2 className="text-black text-center font-semibold">{table.name}</h2>
            <div className='cursor-pointer' onClick={handleTableClick}>
              <svg fill={table.selected ? 'green' : '#cccc'} version="1.1" id="Capa_1" width="100px" height="100px" viewBox="0 0 545.062 545.062" className="mt-2">
                <g>
                  <polygon points="24.91,320.344 103.744,320.344 114.387,406.406 124.312,406.406 124.312,320.344 124.312,291.656 100.196,291.656 
                    27.416,291.656 26.833,291.656 17.394,138.656 0,138.656 0,291.656 0,301.219 0,320.344 0,406.406 17.394,406.406 	"/>
                  <path d="M33.469,282.094h86.062c2.639,0,4.781-2.142,4.781-4.781s-2.142-4.781-4.781-4.781H33.469
                    c-2.639,0-4.781,2.142-4.781,4.781S30.83,282.094,33.469,282.094z"/>
                  <polygon points="515.84,291.656 515.256,291.656 442.476,291.656 411.188,291.656 411.188,320.344 411.188,406.406 
                    428.285,406.406 438.929,320.344 517.762,320.344 525.277,406.406 545.062,406.406 545.062,320.344 545.062,301.219 
                    545.062,291.656 545.062,138.656 525.277,138.656 	"/>
                  <path d="M411.188,277.312c0,2.64,2.142,4.781,4.781,4.781h86.062c2.64,0,4.781-2.142,4.781-4.781s-2.142-4.781-4.781-4.781h-86.062
                    C413.329,272.531,411.188,274.673,411.188,277.312z"/>
                  <path d="M84.925,205.594h77.638v200.812h14.784l11.484-162.562h158.804l11.485,162.562h13.817V205.594h87.2
                    c4.657,0,8.425-3.768,8.425-8.425v-2.275c0-4.657-3.768-8.425-8.425-8.425H84.925c-4.657,0-8.425,3.768-8.425,8.425v2.275
                    C76.5,201.826,80.268,205.594,84.925,205.594z M344.929,205.594l1.349,19.125H190.179l1.348-19.125H344.929z"/>
                </g>
              </svg>
            </div>
          </div>
        ))}
        <div onClick={handleAddTable} className=' opacity-70 w-[150px] h-[150px]  bg-[#0b2131] rounded-md flex justify-center items-center cursor-pointer'>
          <svg width={50} height={50} viewBox="0 0 32 32" version="1.1" fill="#fff" stroke="#fff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > 
                <g id="Icon-Set-Filled" transform="translate(-362.000000, -1037.000000)" fill="#fff"> 
                <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus"> </path> 
                </g> 
              </g> 
            </g>
          </svg>
        </div>
      </div>
      
      <div className='w-[35%] h-screen border-4 py-5'>
        <h1 className='text-2xl font-bold text-center'>FACTURA</h1>
        {selectedTableIndex !== null ? (
          <Order
            tableNumber={selectedTableIndex}
            handleClose={handleCloseOrder}
          />
        ) : (
          <div>
            <p className="text-center text-lg mt-4">Selecciona una mesa para ver la factura.</p>
            <div className='flex w-full h-full flex-col justify-center items-center'>
              <Image width={400} height={300} src="/img/drinking.png"/>
            </div>
          </div>

        )}
      </div>

    </section>
  )
}

export default Tables;