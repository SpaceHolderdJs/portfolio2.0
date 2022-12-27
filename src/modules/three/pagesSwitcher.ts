import * as THREE from "three";
import gsap from "gsap";
import { headerLinks } from "modules/ui/components/Header/utils";

const swithcingAnimationDuration = 2;

const pagesSwitcher = (scene: THREE.Scene, camera: any, route: string) => {
  switch (route) {
    case headerLinks[0].to:
      return gsap
        .fromTo(camera.rotation, { x: camera.rotation.x }, { x: -1 })
        .duration(swithcingAnimationDuration);
    case headerLinks[1].to:
      return gsap
        .fromTo(camera.rotation, { x: camera.rotation.x }, { x: 0 })
        .duration(swithcingAnimationDuration);
    case headerLinks[2].to:
      return gsap
        .fromTo(camera.rotation, { x: camera.rotation.x }, { x: 0.5 })
        .duration(swithcingAnimationDuration);
    case headerLinks[3].to:
      return gsap
        .fromTo(camera.rotation, { x: camera.rotation.x }, { x: 3 })
        .duration(swithcingAnimationDuration);
    default:
      return null;
  }
};

export default pagesSwitcher;
