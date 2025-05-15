import { useState, useEffect } from "react";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}

const SearchInput = ({
  onChange,
  placeholder = "Search...",
  value,
}: SearchInputProps) => {
  const [currentValue, setCurrentValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <input
      className={styles["container"]}
      type="text"
      value={currentValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
