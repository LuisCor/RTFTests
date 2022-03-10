import React from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";


export default function App() {
  return (
    <>
      <div className="App">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeBufferGeometry attach="geometry" args={[25, 15]} />
            <meshPhongMaterial attach="material" color="gray" />
          </mesh>
        </Canvas>
      </div>
      <div className="Controls"></div>
    </>
  );
}
