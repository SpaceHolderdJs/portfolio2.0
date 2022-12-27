import jobsStore from "modules/store/jobsStore";
import { jobs } from "modules/pages/MyJobs/utils";
import * as THREE from "three";
import gsap from "gsap";

const { setCurrentJob } = jobsStore;

const initRayCaster = (scene: THREE.Scene, camera: any) => {
  const raycaster = new THREE.Raycaster();

  window.addEventListener("click", onClick);

  let selectedObject: any = null;
  const pointer = new THREE.Vector2();

  function onClick(event: any) {
    if (selectedObject) {
      selectedObject = null;
    }

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObject(scene, true);

    if (intersects.length > 0) {
      const res = intersects.filter(function (res) {
        return res && res.object;
      })[0];

      if (res && res.object) {
        if (
          res.object.name.includes("job-sphere") ||
          res.object.name.includes("job-torus")
        ) {
          selectedObject = res.object;

          const jobIndex = +res.object.name[res.object.name.length - 1];

          const currentjob = jobs[jobIndex];
          setCurrentJob(currentjob);
        }

        if (res.object.name.includes("moon-mesh")) {
          gsap
            .fromTo(
              camera.position,
              {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z,
              },
              {
                x: res.object.position.x,
                y: res.object.position.y - 5,
                z: res.object.position.z + 15,
              }
            )
            .then(() =>
              gsap.fromTo(
                camera.position,
                {
                  x: camera.position.x,
                  y: camera.position.y,
                  z: camera.position.z,
                },
                {
                  x: 0,
                  y: 0,
                  z: 5,
                }
              )
            );
        }
      }
    }
  }

  window.addEventListener("pointermove", onMousePointer);

  let hoveredObject: any = null;

  function onMousePointer(event: any) {
    if (hoveredObject) {
      gsap.fromTo(hoveredObject.scale, { x: 1.5, y: 1.5 }, { x: 1, y: 1 });
      hoveredObject = null;
    }

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObject(
      scene.getObjectByName("jobs")!,
      true
    );

    if (intersects.length > 0) {
      const res = intersects
        .filter(function (res) {
          return res && res.object;
        })
        .find((res) => res.object.name.includes("job-torus"));

      if (res && res.object) {
        hoveredObject = res.object;

        gsap.fromTo(res.object.scale, { x: 0, y: 0 }, { x: 1.5, y: 1.5 });

        if (hoveredObject.name === res.object.name) return;

        if (hoveredObject.name !== res.object.name) {
          console.log(hoveredObject, res.object.name);
          gsap.fromTo(
            hoveredObject.position,
            { ...hoveredObject.position },
            { z: hoveredObject.position.z - 3 }
          );

          gsap.fromTo(
            res.object.position,
            { ...res.object.position },
            { z: res.object.position.z - 3 }
          );
        }
      }
    }
  }
};

export default initRayCaster;
