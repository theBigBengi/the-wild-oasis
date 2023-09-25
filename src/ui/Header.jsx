import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiBars3 } from "react-icons/hi2";
import MediaQuery from "react-responsive";
import { sizes } from "../utils/constants";
import { useResponsive } from "../hooks/useResponsive";
import ToggleDarkMode from "./ToggleDarkMode";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const { isLaptop } = useResponsive();

  return (
    <StyledHeader>
      {isLaptop ? (
        <>
          <UserAvatar />
          <HeaderMenu />
        </>
      ) : (
        <HiBars3 />
      )}
    </StyledHeader>
  );
}

export default Header;
