import {  useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function MemoBox(props) {
  const {color} =props
  const ref = useRef()
  const [rotate, setRotate] = useState(false)
  const [count, setCount] = useState(0)
  const geometry = useMemo(() => [new THREE.BoxGeometry(), new THREE.SphereGeometry()],[])
 // SYNTAX OF useMemo & using two geometry(shapes)
 // useMemo is used to stop creating new UUid of a geometry
 // it help in using same geometry again and again
// whenever it is rerendered
 useFrame((_, delta) => {
    ref.current.rotation.x += 1 *delta * rotate 
    // here we are setting the speed of the rotation
    // by multiplying by 0.5*delta on the axis X
    // here  command will get executed bases true or false 
    //as rotate is boolean varriable
   
    ref.current.rotation.y += 1 * delta * rotate
  })

  return (
    <mesh {...props} geometry={geometry[count]} ref={ref} onPointerDown={() => {setRotate(!rotate) ; setCount((count+1)%2) }}>
 {/* here we are setting  rotate as true or false by setting (!rotate) */}
      
      <meshBasicMaterial color={rotate ? color :"lime"} wireframe />
    </mesh>
  )
}