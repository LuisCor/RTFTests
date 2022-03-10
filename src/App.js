import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Logo from "./Logo";
import Floor from "./Floor";

import "./styles.css";

export default function App() {
  const [lightColor, setLightColor] = useState([1, 1, 1]);
  const [rotateLogo, setRotateLogo] = useState(false);
  const [lightShow, setLightShow] = useState(false);

  useEffect(() => {
    let intervalID;
    if (lightShow) {
      intervalID = setInterval(() => {
        setLightColor([Math.random(), Math.random(), Math.random()]);
      }, 1000);
    }

    return () => clearInterval(intervalID);
  }, [lightShow, lightColor]);

  const changeLightShow = () => {
    setLightShow(!lightShow);
    console.log("lightshow changed ", lightShow);
  };

  const changeRotate = () => {
    setRotateLogo(!rotateLogo);
  };

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
            color={lightColor}
          />
          <spotLight
            intensity={1.3}
            angle={1}
            penumbra={1}
            position={[20, 10, 0]}
            color={lightColor}
          >
            <primitive object={new THREE.AxesHelper(10)} />
          </spotLight>
          <Suspense fallback={null}>
            <Logo rotate={rotateLogo}/>
            <Floor />
          </Suspense>

          <OrbitControls
            makeDefault
            autoForward={false}
            dragToLook={true}
            movementSpeed={1.0}
            rollSpeed={0.8}
          />
        </Canvas>
      </div>
      <div className="Controls">
        <button onClick={changeLightShow}>Change Color</button>
        <button onClick={changeRotate}>Rotate</button>
      </div>
    </>
  );
}
