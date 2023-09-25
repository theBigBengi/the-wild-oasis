import { styled } from "styled-components";
import MediaQuery from "react-responsive";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { sizes } from "../utils/constants";

const StyledSidebar = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function Sidebar() {
  return (
    <MediaQuery minWidth={sizes.laptop}>
      <StyledSidebar>
        <Logo />
        <MainNav />

        <Uploader />
      </StyledSidebar>
    </MediaQuery>
  );
}
