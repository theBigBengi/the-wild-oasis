import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Input from "./Input";

const StyledInput = styled(Input)`
  font-size: 1.4rem;
  padding: 0.2rem 1.2rem;
  font-weight: 500;
`;

export default function Search({ filterField, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange({ target }) {
    !target.value
      ? // Delete query param on empty value
        searchParams.delete(filterField)
      : // Otherwise set query param in the url
        searchParams.set(filterField, target.value);

    // When the filters changes, we want to get the first results
    searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return <StyledInput type='text' onChange={handleChange} {...props} />;
}
