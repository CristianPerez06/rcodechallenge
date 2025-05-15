import api from "../config/api";
import { Character } from "../interfaces/character";
import { PaginatedResponse } from "../interfaces/pagination";

const BASE_PATH = "/character";

export const getCharacters = (page: number, name?: string) => {
  const buildUrl = (page: number, name?: string) => {
    const baseUrl = `${BASE_PATH}?page=${page}`;
    const nameParam = name ? `&name=${name}` : "";
    return `${baseUrl}${nameParam}`;
  };

  const url = buildUrl(page, name);

  return api.get<PaginatedResponse<Character[]>>(url);
};

export const getCharacter = (id: number) => {
  api.get<Character>(`${BASE_PATH}/${id}`);
};
