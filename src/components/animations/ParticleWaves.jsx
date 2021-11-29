import React, { Suspense, useMemo, useCallback, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import circleImg from "../images/graphicElements/circle.png";
extend({ OrbitControls });
import "./ParticleWaves.css";

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controlRef = useRef();
  useFrame(() => controlRef.current.update());
  return (
    <orbitControls
      ref={controlRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.1}
    />
  );
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  // wave function
  let t = 0;
  let f = 0.002;
  let a = 2;
  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  // x and z cordinates for the points
  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x7f7262}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}

export default function ParticleWaves() {
  return (
    <div className="ParticleWaves">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
