"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(prev => prev + 1);
  }, []);

  useEffect(() => {
    console.log(`[${performance.now()}] number 변경됨! => ${number}`);
  }, [number]);

  useEffect(() => {
    const listner = (event: UIEvent) => {
      console.log(`[${performance.now()}] window size 변경됨!`);
    };
    window.addEventListener('resize', listner);
    return () => {
      window.removeEventListener('resize', listner);
    };
  }, []);

  return (
    <>
      { 
        (function() {
          console.log(`[${performance.now()}] component return 됨.`);
          return <></>;
        })() 
      }
      <div className="w-full relative">
        현재 number 값 : { number }
      </div>
      <button
        onClick={() => {
          console.log(`[${performance.now()}] setNumber 호출됨.`);
          setNumber(prev => prev + 1);
        }}>
        number 값을 1 증가시키기
      </button>
    </>
  );
}