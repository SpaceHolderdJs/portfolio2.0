import { COLORS, FlexRow } from "../../Flex";
import { Text } from "../../Text";
import { GoDeviceMobile } from "react-icons/go";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { AlertWrapper } from "./styled";
import { useEffect, useState } from "react";

export const MobileAlert = () => {
  const [orientation, setOrientation] = useState(
    window.screen.orientation.type
  );

  useEffect(() => {
    const onOrientationChange = () => {
      setOrientation(window.screen.orientation.type);
    };
    window.screen.orientation.addEventListener("change", onOrientationChange);
    return () =>
      window.screen.orientation.removeEventListener(
        "change",
        onOrientationChange
      );
  }, []);

  if (isMobile && orientation === "portrait-primary")
    return (
      <AlertWrapper as={motion.div} animate={{ opacity: [0, 1], y: [600, 0] }}>
        <Text>Please, rotate your phone</Text>
        <FlexRow
          w="55px"
          m="20px 0"
          justifyContent="center"
          as={motion.div}
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}>
          <GoDeviceMobile size={55} color={COLORS.ligthGreen} />
        </FlexRow>
      </AlertWrapper>
    );

  return null;
};
