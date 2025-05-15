import { useState, useEffect } from "react";
import { getCharacters } from "../services/character";
import { Character } from "../interfaces/character";
import { PaginatedResponse } from "../interfaces/pagination";

interface UseGetCharactersReturn {
  characters: Character[];
  loading: boolean;
  error: string | null;
  pagination: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

const useGetCharacters = (page: number = 1): UseGetCharactersReturn => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<
    PaginatedResponse<Character[]>["info"]
  >({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await getCharacters(page);
        const { results, info } = response.data;
        setCharacters(results);
        setPagination(info);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return {
    characters,
    loading,
    error,
    pagination,
  };
};

export default useGetCharacters;
