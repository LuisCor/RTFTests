import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Logo({ rotate }) {
  const { scene } = useGLTF("ic.gltf");

  const meshLogo = useRef();

  useFrame(() => {
    if (rotate) meshLogo.current.rotation.y += 0.01;
  });

  return <primitive object={scene} ref={meshLogo} />;
}
