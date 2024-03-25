import * as THREE from "three";

const initStars = (scene: THREE.Scene) => {
  const object = new THREE.Object3D();
  scene.add(object);

  const starsGenerator = (q: number) => {
    const material = new THREE.MeshBasicMaterial();
    const geometry = new THREE.SphereGeometry(0.03);

    for (let i = 0; i < q; i++) {
      const star = new THREE.Mesh(geometry, material);
      object.add(star);
      star.position.set(
        Math.random() * 70 - Math.random() * 70,
        Math.random() * 150,
        -Math.random() * 10 - 20
      );
    }

    function animate() {
      requestAnimationFrame(animate);
      //   object.rotation.y += 0.0001;
    }

    animate();
  };

  starsGenerator(1000);
};

export default initStars;
