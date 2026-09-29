'use client';
import {lazy,Suspense,useEffect,useState} from 'react';
import {Activity} from 'lucide-react';
const Kinetic=lazy(()=>import('./kinetic'));
export function Movement({label}:{label:string}){
 const [enabled,setEnabled]=useState(false);
 useEffect(()=>{const query=matchMedia('(min-width: 1000px) and (prefers-reduced-motion: no-preference) and (pointer: fine)');const update=()=>setEnabled(query.matches&&navigator.hardwareConcurrency>=4);const timer=setTimeout(update,900);query.addEventListener('change',update);return()=>{clearTimeout(timer);query.removeEventListener('change',update);};},[]);
 return <div className="movement-study"><Suspense fallback={<Activity size={48}/>} >{enabled?<Kinetic/>:<Activity className="movement-fallback" size={48}/>}</Suspense><span>{label}</span></div>;
}
