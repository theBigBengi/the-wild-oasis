import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useResponsive } from "../hooks/useResponsive";
import ButtonIcon from "./ButtonIcon";
import { devices } from "../utils/constants";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-300);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media ${devices.laptop} {
    justify-content: flex-end;
  }
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
        <>
          <Logo height='5rem' withText={false} />
          <ButtonIcon>
            <HiBars3 />
          </ButtonIcon>
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
