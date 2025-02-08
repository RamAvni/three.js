import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh } from "three";

const RoatatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

const App: FC = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight
        position={[1, 1, 1]}
        intensity={10}
        color={"0x0CDBA6"}
      />
      <color attach="background" args={["#F0F0F0"]} />
      <RoatatingCube />
    </Canvas>
  );
};
export default App;
