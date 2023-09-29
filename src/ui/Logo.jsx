import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: ${(props) => props.height || "15.6rem"};
  width: auto;
`;

function Logo({ height }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark-text.png" : "/logo-light-banner.png";

  return (
    <StyledLogo>
      <Img src={src} alt='Logo' height={height} />
    </StyledLogo>
  );
}

export default Logo;
