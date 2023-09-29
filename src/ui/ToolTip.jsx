import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledToolTip = styled.ul`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-300);

  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;

  & li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-50);
  }
`;

const StyledToggle = styled.span`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledContainer = styled.ul`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-300);

  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;

  & li:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-50);
  }
`;

const ToolTipContext = createContext();

function ToolTip({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <ToolTipContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </ToolTipContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(ToolTipContext);

  function handleEneterAndLeave(e) {
    const rect = e.target.closest("span").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle
      onMouseLeave={handleEneterAndLeave}
      onMouseEnter={handleEneterAndLeave}
    >
      open
    </StyledToggle>
  );
}

function Container({ id, children }) {
  const { openId, position, close } = useContext(ToolTipContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <StyledContainer $position={position} ref={ref}>
      {children}
    </StyledContainer>,
    document.body
  );
}

ToolTip.Toggle = Toggle;
ToolTip.Container = Container;

export default ToolTip;
