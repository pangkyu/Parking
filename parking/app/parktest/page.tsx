"use client";

import { useState } from "react";

export default function ParkTest() {
  const [test, setTest] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dataList`);
    const data = await res.json();
    setTest(data);
  };
  fetchData();
  return (
    <>
      {test
        ? test.map((item: any, index: number) => {
            return <p key={index}>{item.name}</p>;
          })
        : null}
    </>
  );
}
