import * as THREE from "three";
import { COLORS } from "modules/ui/Flex";
import { Water } from "./modules/Water";
import { Renderer } from "three";

const initLake = (scene: THREE.Scene, camera: any, renderer: Renderer) => {
  const object = new THREE.Object3D();
  object.name = "lake";

  const lakePlane = {
    geometry: new THREE.PlaneGeometry(150, 100, 500, 500),
  };

  const water = new Water(lakePlane.geometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(
      "materials/waternormals.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    sunDirection: new THREE.Vector3(),
    sunColor: COLORS.black,
    waterColor: COLORS.black,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });

  water.position.set(0, -7, 0);
  water.rotation.x = -Math.PI / 2;
  //@ts-ignore
  water.material.metalness = 0.3;

  object.add(water);

  scene.add(object);

  function animate() {
    requestAnimationFrame(animate);
    //@ts-ignore
    water.material.uniforms["time"].value += 1 / 160;
  }

  animate();
};

export default initLake;
