import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import "./styles.css";
import * as THREE from "three";


export default function App() {
  return (
    <>
      <div className="App">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.1} />
          <spotLight
            intensity={1.3}
            angle={0.3}
            penumbra={1}
            position={[5, 25, 20]}
            shadow-bias={-0.0001}
          />
          <spotLight
            intensity={1.3}
            angle={1}
            penumbra={1}
            position={[20, 10, 0]}
          >
            <primitive object={new THREE.AxesHelper(10)} />
          </spotLight>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeBufferGeometry attach="geometry" args={[25, 15]} />
            <meshPhongMaterial attach="material" color="gray" />
          </mesh>
          <OrbitControls
            makeDefault
            autoForward={false}
            dragToLook={true}
            movementSpeed={1.0}
            rollSpeed={0.8}
          />
        </Canvas>
      </div>
      <div className="Controls"></div>
    </>
  );
}
