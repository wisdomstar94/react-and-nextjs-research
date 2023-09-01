"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();  

  useEffect(() => {
    console.log(`searchParams.entries()`, Array.from(searchParams.entries()));
  }, [searchParams]);

  return (
    <>
      <Link href="/test/link-history-test?page=1" shallow={true} className="px-2 py-1">1</Link>
      <Link href="/test/link-history-test?page=2" shallow={true} className="px-2 py-1">2</Link>
      <Link href="/test/link-history-test?page=3" shallow={true} className="px-2 py-1">3</Link>
      <Link href="/test/link-history-test?page=4" shallow={true} className="px-2 py-1">4</Link>
    </>
  );
}