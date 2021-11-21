import React, { useRef, useLayoutEffect, Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import "./RubikAnimation.css";

function RubikCube() {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <>
      <mesh
        position={[5, 7, -15]}
        ref={mesh}
        scale={active ? 1.1 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
        <meshStandardMaterial
          attach="material"
          color={hovered ? 0x7f7262 : 0xc8a54e}
        />
      </mesh>
    </>
  );
}
function AnimationCanvas() {
  return (
    <Canvas colourManagement camera={{ position: [50, 0, 0], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[25, 25, 25]} intensity={0.4} />
        <directionalLight
          position={[25, 30, 10]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottm={-30}
        />
        <RubikCube />
      </Suspense>
    </Canvas>
  );
}

export default function RubikAnimation() {
  return (
    <div className="RubikAnimation">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
