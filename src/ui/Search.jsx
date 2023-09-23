import { useSearchParams } from "react-router-dom";

import Input from "./Input";

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

  return <Input type='text' onChange={handleChange} {...props} />;
}
