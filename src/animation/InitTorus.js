import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import gsap from "gsap";

let torus, torusGeometry, material;

export function initTorus() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene = new THREE.Scene();
  camera.position.z = 0;

  // Create shape - torus (3d ring)
  torusGeometry = new THREE.TorusGeometry(10, 3, 16, 1000);
  material = new THREE.MeshPhongMaterial({
    map: donutTexture,
  });
  torus = new THREE.Mesh(torusGeometry, material);
  scene.add(torus);

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
  // scene.add(lightHelper, gridHelper);

  controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 600);
  });

  // Animation
  function animation(time) {
    torus.rotation.z = time / 4000;
    torus.rotation.x = time / 4000;
    torus.rotation.y = time / 2000;
    controls.update();
    renderer.render(scene, camera);
  }
}
