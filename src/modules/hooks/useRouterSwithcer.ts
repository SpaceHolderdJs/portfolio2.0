import { ThreeContext } from 'modules/three/ThreeContext';
import pagesSwitcher from 'modules/three/pagesSwitcher';
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouterSwithcer = () => {
  const location = useLocation();
  const { scene, camera } = useContext(ThreeContext);

  useEffect(() => {
    if (camera) {
      pagesSwitcher(scene!, camera, location.pathname);
    }
  }, [camera, location.pathname, scene]);
};
