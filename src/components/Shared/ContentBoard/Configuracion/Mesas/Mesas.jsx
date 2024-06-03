'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight } from "./icons"
import { mesas } from "./config";

const iconMap = {
  IconTableTwo: IconTableTwo,
  IconTableFour: IconTableFour,
  IconTableSix: IconTableSix,
  IconTableHeight: IconTableHeight
};

export function Mesas() {
  const cardsRef = useRef({});
  const containerRef = useRef(null);
  const [dragState, setDragState] = useState({
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    currentCard: null,
  });

  const handleMouseDown = (e, title) => {
    const cardRect = e.target.getBoundingClientRect();
    setDragState({
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - cardRect.left,
      offsetY: e.clientY - cardRect.top,
      currentCard: title,
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, currentCard } = dragState;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    if (currentCard) {
      const card = cardsRef.current[currentCard];
      if (card) {
        card.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    }
  };

  const handleMouseUp = () => {
    const { currentCard } = dragState;

    if (currentCard) {
      const card = cardsRef.current[currentCard];
      if (card) {
        const transform = card.style.transform;
        const [x, y] = transform.replace(/translate\(|px|\)/g, '').split(',').map(Number);
        card.style.transform = 'none';
        card.style.position = 'absolute';
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        containerRef.current.appendChild(card);
      }
    }

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    setDragState({
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      currentCard: null,
    });
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const Mesas = mesas.map(({ title, icon }) => {
    const IconComponent = iconMap[icon];
    return (
      <div
        id={title}
        key={title}
        ref={el => (cardsRef.current[title] = el)}
        onMouseDown={(e) => handleMouseDown(e, title)}
        className="w-[110px] h-[110px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer my-1"
        style={{ position: 'absolute' }}
      >
        <p className="text-sm font-semibold">{title}</p>
        <IconComponent />
      </div>
    );
  });

  return (
    <section className="w-full h-full p-5 flex">
      <div id="container" ref={containerRef} className="w-[86%] h-auto bg-primary rounded-lg p-4 relative">
        {/* Initial static table */}
        <div className="w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer">
          <p>Mesa 1</p>
          <IconTableTwo />
        </div>
      </div>
      <div className="w-[14%] h-auto flex flex-col items-center bg-primary rounded-lg p-2 ml-3 overflow-auto">
        {Mesas}
      </div>
    </section>
  );
}
