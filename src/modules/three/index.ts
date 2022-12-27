import initJobs from "./jobjs";
import initLake from "./lake";
import initMoon from "./moon";
import initMusicWaves from "./musicWaves";
import initRayCaster from "./raycaster";
import initScene from "./scene";
import initStars from "./stars";

export const initThree = () => {
  const { scene, camera, renderer } = initScene();
  initLake(scene, camera, renderer);
  initMoon(scene);
  initStars(scene);
  initJobs(scene, camera);
  initRayCaster(scene, camera);
  initMusicWaves(scene);

  return { scene, camera, renderer };
};
