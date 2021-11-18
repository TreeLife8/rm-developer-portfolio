import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

let camera,
  scene,
  controls,
  renderer,
  geometry,
  material,
  triMaterial,
  trigeometry,
  rubik,
  triangle,
  solidTriangle,
  line;

export function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene = new THREE.Scene();
  camera.position.z = 0;
}
