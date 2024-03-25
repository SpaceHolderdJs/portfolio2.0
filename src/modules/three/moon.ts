import * as THREE from "three";

const initMoon = (scene: THREE.Scene) => {
  const object = new THREE.Object3D();
  object.name = "moon";

  const loader = new THREE.TextureLoader();

  const moonSphere = {
    geometry: new THREE.SphereGeometry(3),
    material: new THREE.MeshStandardMaterial({
      map: loader.load("./materials/moon.jpg"),
      displacementMap: loader.load("./materials/moon-diplacement.png"),
      displacementScale: 0.3,
      fog: scene.fog !== undefined,
    }),
    mesh: () => new THREE.Mesh(moonSphere.geometry, moonSphere.material),
  };

  const mesh = moonSphere.mesh();
  mesh.name = "moon-mesh";
  mesh.position.set(5, 20, -30);

  const pointLight = new THREE.PointLight("white", 15, 20);
  pointLight.position.set(0, 7, -5);
  scene.add(pointLight);

  object.add(mesh);

  scene.add(object);

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
  }

  animate();
};

export default initMoon;
