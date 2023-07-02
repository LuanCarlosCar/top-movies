import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { MovieDetails } from "./context";
import {
  Content,
  ContainerList,
  FavoriteContainer,
  SubTitle,
  Line,
} from "./styles";
import { MovieType } from "./types";
import { Card } from "../../components/Card";
import MainMovie from "./components/MainMovie";
import Footer from "../../components/Footer";

export default function Home() {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieType>(
    {} as MovieType
  );

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api_key = "4e9cbdb6188d564ab3062e486d67953a";
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`;

    const res: { results: MovieType[] } = await fetch(api)
      .then((res) => res.json())
      .catch((error) => console.log(error));

    const limitList = res.results;
    setMovieList(limitList);
    setSelectedMovie(limitList[0]);
  }

  return (
    <Content>
      <MovieDetails.Provider value={{ selectedMovie, setSelectedMovie }}>
        <Header />
        <MainMovie />

        <FavoriteContainer>
          <SubTitle>Populares</SubTitle>
          <Line>-</Line>
          <ContainerList>
            {movieList.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </ContainerList>
        </FavoriteContainer>
        <Footer />
      </MovieDetails.Provider>
    </Content>
  );
}
