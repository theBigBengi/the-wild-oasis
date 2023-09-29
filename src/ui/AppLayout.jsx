import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { devices } from "../utils/constants";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media ${devices.laptopL} {
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem 2.4rem;
  overflow: scroll;
  position: relative;

  @media ${devices.laptopL} {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main id='main'>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
