"use client";

import React, { useState, useEffect } from "react";

import { parseString } from "xml2js";

export default function parking() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
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
  return <p>adsf</p>;
  // return <div>{data ? <p>{JSON.stringify(data)}</p> : <p>loading</p>}</div>;
}
