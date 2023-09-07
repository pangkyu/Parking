"use client";

/**
 * @todo
 * 파킹 코드로 검색이 되는 줄 알았는데 안됩니다
 * 수정 필요 !
 */

import { useParams } from "next/navigation";

export default function detail() {
  const param = useParams();
  console.log(param.id);

  const fetchData = async () => {
    try {
      const response = await fetch(`api/parkingList/${param.id}/${param.id}`);
      console.log(response.text());
    } catch (err) {
      console.error("Detail API ERROR : ", err);
    }
  };
  fetchData();

  return (
    <>
      <p>디테일</p>
    </>
  );
}
