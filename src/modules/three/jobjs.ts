import * as THREE from "three";
import { COLORS } from "modules/ui/Flex";
import { jobs } from "modules/pages/MyJobs/utils";

export const jobsPositions = [
  { x: -15, y: 5, z: -20 },
  { x: 1.5, y: 10, z: -25 },
  { x: 15, y: 15, z: -30 },
  { x: -5, y: 20, z: -35 },
];

const jobsColors = ["teal", "silver", "gold", "blue"];

const initJobs = (scene: THREE.Scene, camera: any) => {
  const object = new THREE.Object3D();
  object.name = "jobs";
  object.position.set(0, 5, -10);

  jobs.forEach(({ name }, i) => {
    const job = {
      geometry: new THREE.TorusGeometry(1, 0.1, 100, 100),
      material: new THREE.MeshBasicMaterial({
        //   metalness: 0.7,
        //   roughness: 0.5,
        color: COLORS.ligthGreen,
      }),
      mesh: () => new THREE.Mesh(job.geometry, job.material),
    };

    const mesh = job.mesh();
    const position = jobsPositions[i];
    mesh.position.set(position.x, position.y, position.z);
    mesh.name = `job-torus${i}`;

    const sphereGeometry = new THREE.SphereGeometry(0.4);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: "white",
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.name = `job-sphere${i}`;

    mesh.add(sphere);

    const pointLight = new THREE.PointLight(jobsColors[i], 3, 7);
    pointLight.position.set(position.x, position.y, position.z + 5);
    object.add(pointLight);

    object.add(mesh);
  });

  scene.add(object);
};

export default initJobs;
