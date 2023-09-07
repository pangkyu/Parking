"use client";

import { useEffect, useRef, useState } from "react";

export default function detail(item: any) {
  // console.log(item);

  const mapElement = useRef(null);
  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    const { naver } = window;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <>
      <p>naver map test</p>

      <div ref={mapElement} style={{ minHeight: "400px" }}></div>
    </>
  );

  function success(position: any) {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
  }
}
