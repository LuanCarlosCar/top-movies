import { createContext, useContext } from "react";
import { MovieType } from "./types";

interface MovieDetailsType {
  selectedMovie: MovieType;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieType>>;
}
export const MovieDetails = createContext({} as MovieDetailsType);

export function useMovieDetails() {
  return useContext(MovieDetails);
}
