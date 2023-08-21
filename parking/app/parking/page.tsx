"use client";

import React, { useState, useEffect } from "react";
import { parseString } from "xml2js";

export default function parking() {
  const [data, setData] = useState<any[]>([]);
  const [parkingLots, setParkingLots] = useState<number>(0);
  const count = 1000;

  useEffect(() => {
    const fetchData = async () => {
      let startIndex = 1;
      let endIndex = 999;
      let status = true;
      try {
        do {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}${startIndex}/${endIndex}/`
          );
          status = response.ok;
          if (response.ok) {
            const responseData = await response.text();
            parseString(responseData, (err, result) => {
              if (err) {
                console.error("ERROR Parsing XML : ", err);
                return;
              }
              console.log("result", result);
              if (result.GetParkingInfo.row[998].ADDR == "") {
                status = false;
              }
              setParkingLots(Number(result.GetParkingInfo.list_total_count[0]));
              setData((prevData: any) => [
                ...prevData,
                ...result.GetParkingInfo.row,
              ]);
            });
          }
          startIndex += count;
          endIndex += count;
        } while (status);
      } catch (err) {
        console.error("ERROR Fetching data: ", err);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <main className="flex items-center justify-center">
      <table className=" table-auto border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">주차장 이름</th>
            <th className="border border-slate-300">주소</th>
            <th className="border border-slate-300">형태</th>
            <th className="border border-slate-300">유/무료</th>
            <th className="border border-slate-300">요금</th>
            <th className="border border-slate-300">총 주차대수</th>
            <th className="border border-slate-300">주차 가능대수</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="border border-slate-300">
                      {item.PARKING_NAME}
                    </td>
                    <td className="border border-slate-300">{item.ADDR}</td>
                    <td className="border border-slate-300">
                      {item.PARKING_TYPE_NM}
                    </td>
                    <td className="border border-slate-300">{item.PAY_NM}</td>
                    <td className="border border-slate-300">
                      {item.RATES}원, {item.TIME_RATE}분
                    </td>

                    <td className="border border-slate-300">
                      {item.CAPACITY}대
                    </td>
                    <td className="border border-slate-300">
                      {item.CAPACITY - item.CUR_PARKING}대
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </main>
  );
}
