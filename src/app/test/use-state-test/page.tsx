"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
  }, []);

  useEffect(() => {
    console.log(`[${performance.now()}] 렌더링 완료됨. number => ${number}`);
  }, [number]);

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