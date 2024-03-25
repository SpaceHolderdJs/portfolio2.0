import { createContext, FC, ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { initThree } from ".";
import { observer } from "mobx-react-lite";
import jobsStore from "modules/store/jobsStore";
import gsap from "gsap";
import { jobsPositions } from "./jobjs";

interface Props {
  children: ReactNode;
}

interface ThreeContextInterface {
  scene: THREE.Scene | null;
  camera: any;
  renderer: THREE.Renderer | null;
}

export const ThreeContext = createContext<ThreeContextInterface>(
  {} as ThreeContextInterface
);

export const ThreeProvider: FC<Props> = observer(({ children }) => {
  const [threeData, setThreeData] = useState<ThreeContextInterface>(
    {} as ThreeContextInterface
  );

  const { currentJob } = jobsStore;

  useEffect(() => {
    setThreeData(initThree());
  }, []);

  useEffect(() => {
    const { camera } = threeData;

    if (camera?.position) {
      const { x, y, z } = camera.position;
      if (currentJob) {
        const jobPosition = jobsPositions[currentJob.id];

        gsap.fromTo(
          camera.position,
          { x, y, z },
          {
            x: jobPosition.x * 0.03 + currentJob.id,
            y: jobPosition.y * 0.03 + currentJob.id,
            z: jobPosition.z * 0.03 + currentJob.id,
          }
        );
      } else {
        gsap.fromTo(
          camera.position,
          { x, y, z },
          {
            x: 0,
            y: 0,
            z: 5,
          }
        );
      }
    }
  }, [currentJob, threeData]);

  const { camera, renderer, scene } = threeData;

  return (
    <ThreeContext.Provider value={{ camera, renderer, scene }}>
      {children}
    </ThreeContext.Provider>
  );
});
