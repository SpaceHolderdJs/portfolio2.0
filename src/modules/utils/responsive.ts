import { isMobile, isTablet } from "react-device-detect";

const config = {
  desktop: 1000,
  tablet: 600,
  mobile: 350,
};

export const desktop = (args: string) =>
  `@media only screen and (max-width: ${config.desktop}px) { ${args} }`;
export const tablet = (args: string) =>
  `@media only screen and (max-width: ${config.tablet}px) { ${args} }`;
export const mobile = (args: string) =>
  `@media only screen and (max-width: ${config.mobile}px) { ${args} }`;

export const styledDevicesAdaptive = {
  mobile: (deviceStyles: string, defaultStyles: string) =>
    isMobile ? `${deviceStyles}` : defaultStyles,
  tablet: (deviceStyles: string, defaultStyles: string) =>
    isTablet ? `${deviceStyles}` : defaultStyles,
};
