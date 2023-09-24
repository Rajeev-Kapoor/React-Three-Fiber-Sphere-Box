import { Canvas } from "@react-three/fiber"
import Box from "./Box"
import MemoBox from "./MemoBox"

export  default function App() {
    return(
    <Canvas camera={{ position: [0, 0, 2] }}>
      
        
    <Box position={[0,0,0]} name = "a" wireframe={true} color="green"/>
      <Box position={[-1.5 ,0,0]} name = "c" wireframe={true} color="red"/>
      <Box position={[1.5,0,0]} name = "b" color="blue"  />
      {/* // by default wireframe is false */}

      <MemoBox position={[1,0,0]} name="a" wireframe={true} color="blue"/>
      <MemoBox position={[-1,0,0]} name="b" wireframe={true} color="green"/>
    </Canvas>
    )
}   
//position={[x,y,z]}