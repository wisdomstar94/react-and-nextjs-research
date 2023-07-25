"use client"

import { useMemo, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);
  const description = useMemo(() => `현재 숫자는 ${number} 입니다.`, [number]);

  return (
    <>
      {
        (function(){
          console.log('렌더링됨..');
          return <></>;
        }())
      }
      <div className="w-full relative">
        { description}
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