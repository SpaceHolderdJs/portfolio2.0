import { COLORS } from "modules/ui/Flex";
import * as THREE from "three";

const initScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.domElement.classList.add("renderer");
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("root")!.appendChild(renderer.domElement);

  scene.background = new THREE.Color(COLORS.darkGrey);

  // scene.fog = new THREE.Fog(COLORS.darkGrey, 7, 40);

  camera.position.z = 5;
  camera.rotation.x = -1;

  const mouse = new THREE.Vector2();

  window.addEventListener("mousemove", onMouseMove);

  function onMouseMove(e: MouseEvent) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    camera.rotation.y = (window.innerWidth / 2 - e.pageX) * 0.0001;
  }

  window.addEventListener("resize", onWindowResize);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();

  return { scene, camera, renderer };
};

export default initScene;
