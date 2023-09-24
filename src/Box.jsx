import { useFrame } from "@react-three/fiber";
import { useEffect,  useRef, useState } from "react";
export default function Box(props)
{ 
    //we recieved position and name both here
  const meshmaterialref =useRef();  
  const meshref = useRef({});
  const [hover, setHover] = useState(false)
  const [rotate, setRotate] =useState(false)
useEffect(() => {
    console.log(meshref);
      console.log(meshmaterialref);
}, [])
//useFrame((_,delta)=>{

useFrame((state,delta)=>{
// this state will give u the state of the frame
if(!rotate){
meshref.current.rotation.x += 1*delta 
meshref.current.rotation.y += 0.5*delta   
// here its rotating at 60 frames per second
meshref.current.position.y = Math.sin(state.clock.getElapsedTime()*2);
// meshref.current.position.y =Math.sin(state.clock.getElapsedTime()*2);
// here we are creating the movement of the box on the axis
}}) 

  
  // the above console will tell the detail of the position
    const {position,color, name, wireframe}= props;
    return(<>
  
          <mesh position={position} name={name} ref={meshref} 
          scale={hover ?[1.2,1.2,1.2] : [1,1,1]}
          onPointerUp={() => setRotate(true)}
          onPointerDown={()=> setRotate(false)}
           onPointerOver={()=> setHover(true)}
           onPointerOut={()=>setHover(false)}  
            //the given console get the current status of meshref clicked
            //console.log( meshref.current)
         >
        <boxGeometry />
        <meshBasicMaterial color = {hover ? "yellow" : color} wireframe={wireframe} ref={meshmaterialref} />
      </mesh>
      </>
)}      