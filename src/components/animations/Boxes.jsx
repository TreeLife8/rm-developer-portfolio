import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Boxes.css";

function Box(props) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.005)
  );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => setClick(!clicked)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "0x7f7262" : "0x1d1e22"} />
    </mesh>
  );
}
function AnimationCanvas() {
  return (
    <Canvas colourManagement camera={{ position: [20, 0, 0], fov: 10 }}>
      <ambientLight intensity={0.2} />
      <directionalLight intensity={1.7} position={[-5, 20, 40]} />
      <Box position={[5, 0, 0]} />
    </Canvas>
  );
}

export default function Boxes() {
  return (
    <div className="Boxes">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
