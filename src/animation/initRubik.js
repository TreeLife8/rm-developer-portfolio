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
  rubik.position.setX(-4.1);
  rubik.position.setZ(20);
  rubik.position.setY(-2.5);

  // Wireframe triangle
  triMaterial = new THREE.LineBasicMaterial({
    color: 0xf1f1f1,
  });
  const points = [];
  points.push(new THREE.Vector3(-2, -1.5, 0));
  points.push(new THREE.Vector3(0, 1.5, 0));
  points.push(new THREE.Vector3(2, -1.5, 0));
  points.push(new THREE.Vector3(-2, -1.5, 0));
  trigeometry = new THREE.BufferGeometry().setFromPoints(points);
  line = new THREE.Line(trigeometry, triMaterial);
  scene.add(line);
  line.position.setX(-4);
  line.position.setY(-2.3);

  // Solid triangle
  solidTriangle = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -2, -1.5, 0, 0, 1.5, 0, 2, -1.5, 0, -2, -1.5, 0,
  ]);

  solidTriangle.setAttribute(
    "position",
    new THREE.BufferAttribute(vertices, 3)
  );
  const solidTriMaterial = new THREE.MeshBasicMaterial({ color: 0xc7a44e });
  triangle = new THREE.Mesh(solidTriangle, solidTriMaterial);
  scene.add(triangle);
  triangle.position.setX(0.5);
  triangle.position.setZ(0.8);
  triangle.position.setY(-2.3);
  triangle.position.setX(-4);

  // Animate on load
  gsap.to(rubik.position, {
    z: 0,
    ease: "back.out(1.1)",
    duration: 2,
  });
  gsap.to(camera.position, {
    z: -5,
    duration: 2,
  });

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
    rubik.rotation.z = time / 4000;
    rubik.rotation.x = time / 4000;
    rubik.rotation.y = time / 2000;
    controls.update();
    renderer.render(scene, camera);
  }
}
