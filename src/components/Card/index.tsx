import { MovieType } from "../../pages/Home/types";
import {
  BackPoster,
  CardContainer,
  ContainerInfo,
  StarImg,
  ContainerStar,
  PostTitle,
} from "./styles";

import vstar from "../../assets/imgs/vstar.svg";
import CategoryText from "../CategoryText";
import { useMovieDetails } from "../../pages/Home/context";

interface Props {
  movie: MovieType;
}

export function Card(props: Props) {
  const { poster_path, title, id } = props.movie;

  const normalizedPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  const { selectedMovie, setSelectedMovie } = useMovieDetails();

  function setNewMovie() {
    setSelectedMovie(props.movie);
  }

  return (
    <CardContainer
      isSelected={selectedMovie.id === id}
      onMouseOver={setNewMovie}
    >
      <BackPoster src={normalizedPath} alt="card" />

      <ContainerInfo>
        <CategoryText name="Categoria" />

        <ContainerStar>
          {[1, 2, 3, 4, 5].map((e) => {
            return <StarImg key={e} src={vstar} alt="card" />;
          })}
        </ContainerStar>

        <PostTitle>{title}</PostTitle>
      </ContainerInfo>
    </CardContainer>
  );
}
