import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    color: var(--color-grey-600);
    background: var(--color-grey-50);
    border: 1px solid var(--color-grey-300);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: var(--color-grey-700);
      border: 1px solid var(--color-grey-400);
      background-color: var(--color-grey-100);
    }
  }
`;

export default FileInput;
