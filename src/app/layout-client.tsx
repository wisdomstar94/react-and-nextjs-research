"use client"

import Link from "next/link";
import { useState } from "react";

export default function RootLayoutClient() {
  const [menus, setMenus] = useState([
    { name: '/test/use-state-test', href: '/test/use-state-test' },
    { name: '/test/use-effect-multiple', href: '/test/use-effect-multiple' },
    { name: '/test/not-need-use-effect', href: '/test/not-need-use-effect' },
    { name: '/test/use-callback-performance-test', href: '/test/use-callback-performance-test' },
    { name: '/test/video-element-some-hide', href: '/test/video-element-some-hide' },
  ]);

  return (
    <>
      <ul className="w-full relative flex flex-wrap gap-2">
        {
          menus.map(menu => {
            return (
              <li 
                className="inline-flex relative"
                key={menu.name}>
                <Link 
                  href={menu.href}
                  className="w-full inline-flex px-6 py-2 text-sm text-slate-700 border border-slate-400 rounded-md cursor-pointer hover:bg-slate-200">
                  { menu.name }
                </Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
