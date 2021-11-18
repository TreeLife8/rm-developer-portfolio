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
  camera.position.z = 5;

  // Rubik cube
  geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
  const rubikTexture = new THREE.TextureLoader().load(
    "/src/images/rubikCube.png"
  );
  material = new THREE.MeshPhongMaterial({
    map: rubikTexture,
  });
  rubik = new THREE.Mesh(geometry, material);
  scene.add(rubik);
  rubik.position.setX(-3.5);
  rubik.position.setZ(20);
  rubik.position.setY(-0.3);

  // Rendering
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(0x272727, 1);
  document.body.appendChild(renderer.domElement);

  // Lighting
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(-4.5, 2, -1);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(pointLight, ambientLight);

  // Light & gid helpers
  const lightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 5);
  scene.add(lightHelper, gridHelper);

  controls = new OrbitControls(camera, renderer.domElement);

  // Animation
  function animation(time) {
    rubik.rotation.z = time / 4000;
    rubik.rotation.x = time / 4000;
    rubik.rotation.y = time / 2000;
    controls.update();
    renderer.render(scene, camera);
  }
}
