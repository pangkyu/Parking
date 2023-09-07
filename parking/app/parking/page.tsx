"use client";

import React, { useState, useEffect } from "react";
import { parseString } from "xml2js";
import GuList from "@/components/GuList";
import { useRouter } from "next/navigation";
import Detail from "./[id]/page";
import IParking from "@/types/parking";

/**
 * @todo Detail 컴포넌트에 데이터 보내는 방법 변경필요~
 */

export default function Parking() {
  const [data, setData] = useState<IParking[]>([]);
  const [_, setParkingLots] = useState<number>(0);
  const count = 1000;

  useEffect(() => {
    const fetchData = async () => {
      let startIndex = 1;
      let endIndex = 999;
      let uniqueData: any[] = [];
      let status = true;

      try {
        do {
          const response = await fetch(
            `api/parkingList/${startIndex}/${endIndex}`
          );
          status = response.ok;
          if (status) {
            const responseData = await response.text();
            parseString(responseData, (err, result) => {
              if (err) {
                console.error("ERROR Parsing XML : ", err);
                return;
              }
              if (result.GetParkingInfo.row[998].ADDR == "") {
                status = false;
              }
              uniqueData = uniqueData.concat(result.GetParkingInfo.row);
              setParkingLots(Number(result.GetParkingInfo.list_total_count[0]));
            });
          }
          startIndex += count;
          endIndex += count;
        } while (status);
      } catch (err) {
        console.error("ERROR Fetching data: ", err);
      }

      const uniqueDataWithNoDuplicates = uniqueData.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (innerItem) => innerItem.PARKING_CODE[0] === item.PARKING_CODE[0]
          )
      );
      setData(uniqueDataWithNoDuplicates);
    };

    fetchData();
  }, []);

  const router = useRouter();
  const handleRouting = (item: IParking) => {
    router.push(`/parking/detail`);
    Detail(item);
  };

  return (
    <main className="text-gray-600 body-font w-[100%] flex justify-center items-center">
      <div className="flex flex-col text-center mx-auto">
        <h1 className="flex mt-20 justify-center text-[20px] sm:text-2xl md:text-3xl font-medium title-font mb-4">
          <p className="text-indigo-500">파킹 굿</p>
          <p className="text-gray-900">에서 주차장을 찾아보세요!</p>
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-center text-center lg:w-[50%]">
            <GuList />
          </div>
        </div>
        <table className="table-auto border-collapse border border-slate-400 text-[8px] lg:text-[12px]">
          <thead>
            <tr>
              <th className="border border-slate-300">주차장 이름</th>
              <th className="border border-slate-300">주소</th>
              <th className="border border-slate-300">유/무료</th>
              <th className="border border-slate-300">요금</th>
              <th className="border border-slate-300">총 주차대수</th>
              <th className="border border-slate-300">주차 가능대수</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item: IParking, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="h-[40px] cursor-pointer"
                      onClick={() => handleRouting(item)}
                    >
                      <td className="border border-slate-300">
                        {item.PARKING_NAME}
                      </td>
                      <td className="border border-slate-300">{item.ADDR}</td>
                      <td className="border border-slate-300">{item.PAY_NM}</td>
                      <td className="border border-slate-300">
                        {item.RATES}원, {item.TIME_RATE}분
                      </td>
                      <td className="border border-slate-300">
                        {item.CAPACITY}대
                      </td>
                      <td className="border border-slate-300">
                        {Number(item.CAPACITY) - Number(item.CUR_PARKING)}대
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </main>
  );
}
