import React, { useState, useEffect } from "react";
import { useDebounce } from "../../shared/hooks";
import { DEBOUNCE_DELAY } from "../../shared/constants";
import "../../styles/forms.scss";

type Props = {
  onSearch: any;
};

export const CharacterSearch = (props: Props) => {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState<string>();

  const debouncedSearchItem = useDebounce(searchTerm, DEBOUNCE_DELAY);

  useEffect(() => {
    onSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchItem]);

  const handleInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-input"
      placeholder="Search by name here..."
      onInput={handleInput}
    />
  );
};
