import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 2.5rem;

  ${(props) =>
    props.wrap === "true" &&
    css`
      flex-wrap: wrap;
    `}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
