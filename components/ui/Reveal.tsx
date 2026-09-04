"use client";
import { useEffect, useRef, useState } from "react";
export default function Reveal({children,className=""}:{children:React.ReactNode,className?:string}){
 const ref=useRef<HTMLDivElement>(null); const [show,setShow]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setShow(true);io.disconnect()}},{threshold:.12});io.observe(el);return()=>io.disconnect()},[]);
 return <div ref={ref} className={`reveal ${show?"is-visible":""} ${className}`}>{children}</div>
}
