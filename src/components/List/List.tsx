import { useState } from "react";
import useGetCharacters from "../../hooks/useGetCharacters";
import Button from "../Button/Button";

import styles from "./List.module.scss";

const List = () => {
  const [page, setPage] = useState(1);
  const { characters, loading, error, pagination } = useGetCharacters(page);

  const handlePrevious = () => {
    if (pagination?.prev) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (pagination?.next) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <div className={styles["info-message"]}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles["info-message"]}>
        Oops, something went wrong: {error}
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["characters-list"]}>
        {characters.map((character) => (
          <img
            key={character.id}
            className={styles["item-img"]}
            src={character.image}
            alt={character.name}
          />
        ))}
      </div>
      <div className={styles["pagination-controls"]}>
        <Button
          onClick={handlePrevious}
          isDisabled={!pagination?.prev}
          text="Previous"
        />
        <Button
          onClick={handleNext}
          isDisabled={!pagination?.next}
          text="Next"
        />
      </div>
    </div>
  );
};

export default List;
