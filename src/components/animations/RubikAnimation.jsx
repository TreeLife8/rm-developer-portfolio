import React, { useRef, useLayoutEffect, Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import "./RubikAnimation.css";

function RubikCube() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <>
      <mesh position={[5, 7, -15]} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
        <meshStandardMaterial attach="material" color={0xc7a44e} />
      </mesh>
    </>
  );
}
function Triangle() {
  return (
    <>
      <mesh position={[-5, 10, -10]} rotation={[Math.PI / 4, -4.7, 28]}>
        <circleBufferGeometry attach="geometry" args={[15, 3]} />
        <meshStandardMaterial attach="material" color={0x7f7262} />
      </mesh>
    </>
  );
}

function Line({ start, end }) {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={0xeeeef1} />
    </line>
  );
}
function AnimationCanvas() {
  const triangleOutline = [
    {
      start: [0, 23, -15],
      finish: [0, 0, 0],
    },
    {
      start: [0, 23, -15],
      finish: [0, 0, -30],
    },
    {
      start: [0, 0, 0],
      finish: [0, 0, -30],
    },
  ];
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
        {triangleOutline.map((line, index) => {
          return <Line key={index} start={line.start} end={line.finish} />;
        })}
        <Triangle />
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
