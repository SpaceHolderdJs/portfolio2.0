import React, { createContext, FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

interface AudioContextInterface {
  audioRef: any;
}

export const AudioContext = createContext<AudioContextInterface>(
  {} as AudioContextInterface
);

export const AudioProvider: FC<Props> = ({ children }) => {
  const audioRef = useRef(null);

  return (
    <AudioContext.Provider value={{ audioRef }}>
      <audio
        ref={audioRef}
        src="./sounds/Hensonn-Omega.mp3"
        id="audio"
        // autoPlay
      />
      {children}
    </AudioContext.Provider>
  );
};
