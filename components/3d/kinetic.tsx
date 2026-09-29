'use client';
import {useEffect,useRef} from 'react';
import * as THREE from 'three';

// Abstract articulated movement study. Deliberately not an anatomical model.
export default function Kinetic(){
 const host=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const element=host.current;if(!element)return;
  let renderer:THREE.WebGLRenderer;
  try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{return;}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.setSize(180,200);
  element.appendChild(renderer.domElement);
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(35,.9,.1,50);camera.position.set(0,0,7);
  scene.add(new THREE.AmbientLight(0xffffff,2));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(3,4,5);scene.add(light);
  const group=new THREE.Group();scene.add(group);
  const geometry=new THREE.TorusGeometry(.35,.095,10,32);
  const material=new THREE.MeshStandardMaterial({color:0xa5b475,roughness:.34,metalness:.15});
  for(let i=0;i<12;i++){const ring=new THREE.Mesh(geometry,material);const y=(i-5.5)*.19;ring.position.set(Math.sin(i*.48)*.18,y,0);ring.rotation.set(1.05,i*.12,i*.08);ring.scale.setScalar(.75+Math.sin(i/11*Math.PI)*.25);group.add(ring);}
  let frame=0,visible=true,px=0,py=0,scroll=0;const target={x:0,y:0};
  const move=(e:PointerEvent)=>{target.x=(e.clientX/window.innerWidth-.5)*.6;target.y=(e.clientY/window.innerHeight-.5)*.25;};
  const onScroll=()=>{scroll=Math.min(window.scrollY/window.innerHeight,1)*.4;};
  const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;});observer.observe(element);
  const clock=new THREE.Clock();const draw=()=>{frame=requestAnimationFrame(draw);if(!visible||document.hidden)return;px+=(target.x-px)*.04;py+=(target.y-py)*.04;group.rotation.y=px+scroll+Math.sin(clock.getElapsedTime()*.35)*.12;group.rotation.z=py+.13;renderer.render(scene,camera);};draw();
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('scroll',onScroll,{passive:true});
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('pointermove',move);window.removeEventListener('scroll',onScroll);geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();};
 },[]);
 return <div ref={host} className="kinetic-canvas" aria-hidden="true"/>;
}
