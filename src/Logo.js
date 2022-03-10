import React from "react";

import { useGLTF } from "@react-three/drei";

export default function Logo() {
  const { scene } = useGLTF("ic.gltf");


  return <primitive object={scene} />;
}
