"use client";

import React, { useState, useEffect } from "react";
import { parseString } from "xml2js";

export default function parking() {
  const [data, setData] = useState(null);
  let parkingCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}0/999/`
        );
        if (response.ok) {
          const responseData = await response.text();
          parseString(responseData, (err, result) => {
            if (err) {
              console.error("ERROR Parsing XML : ", err);
            } else {
              setData(result);
            }
          });
        }
      } catch (err) {
        console.error("ERROR Fetching data: ", err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  if (data) {
    parkingCount = Number(data.GetParkingInfo.list_total_count[0]);
  }

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>주차장 이름</th>
            <th>주차장 주소</th>
            <th>주차장 형태</th>
            <th>유/무료</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.GetParkingInfo.row.map((item, index: number) => {
                console.log(item);
                return (
                  <div key={index}>
                    <th>{item.PARKING_NAME}</th>
                    <th>{item.ADDR}</th>
                    <th>{item.PARKING_TYPE_NM}</th>
                    <th>{item.PAY_NM}</th>
                  </div>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}
