import { COLORS, FlexRow } from "modules/ui/Flex";
import React, { useContext } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { AudioContext } from "./AudioContext";

export const AudioControl = () => {
  const { audioRef } = useContext(AudioContext);

  const onSoundIconClick = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <FlexRow alignItems="center" h="100%" m="10px">
        {/* <iframe
          title="none"
          src="./sounds/silent.ogg"
          allow="autoplay"
          id="audio"
          style={{ display: "none" }}></iframe> */}
        <AiOutlineSound
          size={25}
          color={COLORS.ligthGreen}
          onClick={onSoundIconClick}
        />
      </FlexRow>
    </>
  );
};
