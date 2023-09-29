import { useMediaQuery } from "react-responsive";
import { devices } from "../utils/constants";

export function useResponsive() {
  const isLaptopL = useMediaQuery({
    minWidth: 1440,
  });

  const isLaptop = useMediaQuery({
    minWidth: 1024,
  });

  const isTablet = useMediaQuery({
    maxWidth: 1023,
    minWidth: 768,
  });

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return {
    isLaptop,
    isLaptopL,
    isMobile,
    isTablet,
  };
}
