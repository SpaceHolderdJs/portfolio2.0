import { COLORS } from "modules/ui/Flex";
import * as THREE from "three";

const initMusicWaves = (scene: THREE.Scene) => {
  document.querySelector("audio")!.click();
  const audio = document.querySelector("audio")!;

  const audioCtx = new AudioContext();
  const analyser = audioCtx.createAnalyser();

  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  analyser.fftSize = 32;
  const audioData = new Uint8Array(analyser.frequencyBinCount);

  const loader = new THREE.TextureLoader();

  const object = new THREE.Object3D();

  const terrain = {
    geometry: new THREE.PlaneGeometry(100, 50, 50, 50),
    material: new THREE.MeshStandardMaterial({
      displacementScale: 0,
      displacementMap: loader.load("./materials/terrain-height.png"),
      alphaMap: loader.load("./materials/terrain-alpha-map.png"),
      map: loader.load("./materials/terrain-map.webp"),
      transparent: true,
      color: COLORS.ligthGreen,
    }),
    mesh: () => new THREE.Mesh(terrain.geometry, terrain.material),
  };

  const mesh = terrain.mesh();
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, -10, -70);

  const pointLight = new THREE.PointLight(COLORS.ligthGreen, 15, 100);
  pointLight.position.set(0, 30, -50);
  scene.add(pointLight);

  object.add(mesh);
  object.add(pointLight);

  scene.add(object);

  const animate = () => {
    requestAnimationFrame(animate);
    if (!audio.paused) {
      analyser.getByteFrequencyData(audioData);

      mesh.material.displacementScale =
        (audioData[3] - audioData[6] + audioData[10]) / 10;
    }
  };

  animate();
};

export default initMusicWaves;
