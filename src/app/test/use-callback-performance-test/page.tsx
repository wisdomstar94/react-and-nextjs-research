"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState<number>(0);

  function calculate(value: number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
      result += value;
    }
    return result;
  }

  useEffect(() => {
    console.log(`[${performance.now()}] 렌더링 완료됨..`);
  }, [number]);

  return (
    <>
      {
        (function(){
          console.log(`[${performance.now()}] 렌더링됨..`);
          return <></>;
        }())
      }
      <div className="w-full relative">
        { calculate(10) }
      </div>
      <button
        onClick={() => {
          setNumber(prev => prev + 1);
        }}>
        number 증가 [{ number }]
      </button>
    </>
  );
}