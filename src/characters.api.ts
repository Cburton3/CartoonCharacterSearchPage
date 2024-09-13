import axios from "axios";
import { Character } from "./characters.model";

export const obtainCharacters = async (): Promise<Character[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
    return data;
  } catch (error) {
    throw new Error("Error al obtener el personaje");
  }
};
