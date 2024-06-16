'use client'
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 2000;
    if (start === end) return;

    const incrementTime = (2.75 / end) * 100; // Duration of the animation in seconds / total count
    const timer = setInterval(() => {
      start += 5;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="desktop:text-[3.5rem] text-center font-extrabold text-secondary leading-[75px]">
      <span>{count.toLocaleString()}</span> clientes
    </h2>
  );
};

export default Counter;

