'use client'
import { useEffect, useState } from "react";
import { getAllData } from "./data.api";

export function DataUser() {

  const [ data, setData ] = useState();

  useEffect(() => {
    async function loadData() {
      const res = await getAllData();
      setData(res.data);
      console.log(res)
    }
    loadData()
  }, []);
} 