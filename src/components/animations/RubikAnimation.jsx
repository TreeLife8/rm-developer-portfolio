import React, { useRef, useLayoutEffect, Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "./RubikAnimation.css";
import rubik from "../images/rubik.png";
import { TextureLoader } from "three";
import useWindowDimensions from "../domains/useWindowDimension";

function RubikCube() {
  const mesh = useRef();
  const [state, toggle] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  const rubikMaterial = useLoader(TextureLoader, rubik);
  return (
    <>
      <mesh
        position={[5, 7, -15]}
        ref={mesh}
        scale={state ? 1.15 : 1}
        onPointerOver={(event) => toggle(true)}
        onPointerOut={(event) => toggle(false)}
      >
        <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
        <meshStandardMaterial
          attach="material"
          transparent={false}
          map={rubikMaterial}
        />
      </mesh>
    </>
  );
}
function Triangle() {
  return (
    <>
      <mesh position={[-5, 10, -10]} rotation={[Math.PI / 4, -4.7, 28]}>
        <circleBufferGeometry attach="geometry" args={[15, 3]} />
        <meshStandardMaterial attach="material" color={0xe0ba74} />
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
        <directionalLight
          position={[5, 20, 10]}
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

export default function RubikAnimation(props) {
  const coord = props.rect;
  const introCoord = props.introRect;
  const { height, width } = useWindowDimensions();
  if (coord) {
    const [lgStyle, setLgStyle] = useState({
      top: `${Math.abs(
        Math.floor(
          height > 600
            ? width > 1300
              ? coord.height * 1.7
              : coord.bottom + coord.top
            : coord.height + coord.top * 1.5
        )
      )}px`,
      left: `${Math.floor(coord.width / 6)}px`,
      height: `${Math.floor(coord.height * 2)}px`,
    });
    const [mdStyle, setMdStyle] = useState({
      width: `${Math.floor(
        width > 600 ? (width > 800 ? width / 5 : width / 8) : width / 4.5
      )}vw`,
      top: `${Math.abs(
        Math.floor(
          height > 1100
            ? height / 2.5
            : height > 720
            ? width < 700
              ? height / 2.5
              : height / 2
            : height * 1.1
        )
      )}px`,
      left: `${Math.floor(
        width > 550
          ? width > 800
            ? width > 900
              ? (-1 * width) / 25
              : -1 * (width / 28)
            : width / 40
          : (-1 * width) / 14
      )}vw`,
      height: `${Math.floor(
        width > 540
          ? height > 1050
            ? coord.height / 5
            : coord.height / 6.5
          : coord.height / 3.5
      )}vh`,
    });
    const [smStyle, setSmStyle] = useState({
      width: `${Math.floor(
        introCoord.width > 400
          ? width / 2.2
          : width > 310
          ? height > 635
            ? width / 2.4
            : width / 2
          : width / 1.7
      )}vw`,
      top: `${Math.abs(
        Math.floor(
          height > 900
            ? height / 9.5
            : height > 800
            ? height / 6
            : (height > 700) & (width > 315)
            ? height / 7
            : (height < 635) & (width < 435)
            ? height / 4
            : height > 700
            ? height / 6.3
            : height / 5
        )
      )}vh`,
      left: `-${Math.floor(
        introCoord.width > 350
          ? width / 5.5
          : width > 310
          ? width / 6
          : width / 4
      )}vw`,
      height: `${Math.floor(
        height > 730 ? height / 14.5 : width > 431 ? height / 12 : height / 10
      )}vh`,
    });
    console.log({ height, width });
    console.log(coord);
    console.log(lgStyle);
    if (introCoord) {
      return (
        <div
          className="RubikAnimation"
          style={
            width >= 951 ? lgStyle : introCoord.width >= 416 ? mdStyle : smStyle
          }
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
          </Suspense>
        </div>
      );
    } else return null;
  }
}
