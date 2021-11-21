import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import "./WabbleGeometries.css";

function Cube({ position, size, speed, factor, rotation }) {
  const mesh = useRef();
  useFrame(
    () =>
      (mesh.current.rotation.x =
        mesh.current.rotation.y =
        mesh.current.rotation.z +=
          rotation)
  );
  return (
    <>
      <mesh position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={size} />
        <MeshWobbleMaterial
          speed={speed}
          factor={factor}
          attach="material"
          color={0x1d1e22}
        />
      </mesh>
    </>
  );
}
function AnimationCanvas() {
  const parameters = [];
  function RandomParameters(size, position, speed, factor, rotation) {
    const r = Math.ceil(Math.random());
    const ro = Math.ceil(Math.random() - 0.5);
    const xr = Math.ceil(10 * (Math.random() - 0.5));
    const yr = Math.ceil(10 * (Math.random() - 0.5));
    const zr = Math.ceil(10 * (Math.random() - 0.5));
    this.size = size;
    this.position = position;
    this.speed = speed;
    this.factor = factor;
    this.rotation = rotation;
    parameters.push({
      sizeCube: [(r / 3) * this.size, (r / 3) * this.size, (r / 3) * this.size],
      sizeRec: [(r / 3) * this.size, ((r / 3) * this.size) / 4],
      positionCube: [
        xr * this.position,
        yr * this.position,
        zr * this.position,
      ],
      positionRec: [
        -xr * this.position,
        -yr * this.position,
        -zr * this.position,
      ],
      speed: this.speed * r,
      factor: (this.factor * r) / 2,
      rotation: (this.rotation * ro) / 80,
    });
  }
  for (let i = 0; i < 500; i++) {
    new RandomParameters(i * 0.5, i * 0.5, 1, 1, 0.5);
  }
  return (
    <Canvas colourManagement camera={{ position: [50, 0, 0], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[25, 30, 10]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottm={-30}
        />
        {parameters.map((p, index) => {
          return (
            <Cube
              key={index}
              size={p.sizeCube}
              position={p.positionCube}
              speed={p.speed}
              factor={p.factor}
              rotation={p.rotation}
            />
          );
        })}
        {parameters.map((p, index) => {
          return (
            <Cube
              key={index}
              size={p.sizeRec}
              position={p.positionRec}
              speed={p.speed}
              factor={p.factor}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
}
export default function WabbleGeometries() {
  return (
    <div className="WabbleGeometries">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
