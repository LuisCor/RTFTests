
export default function Floor() {
    return (
          <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]}>
             <planeBufferGeometry attach="geometry" args={[25, 15]}  />
             <meshPhongMaterial attach="material" color="gray" />
          </mesh>
    );
    
 }