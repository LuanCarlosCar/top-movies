import CategoryText from "../../../../components/CategoryText";
import star from "../../../../assets/imgs/vtar2.svg";
import timeCircle from "../../../../assets/imgs/timeCircle.svg";
import {
  ContainerMain,
  ContainerStar,
  DescriptionText,
  ImgBanner,
  StarImg,
  Title,
  Button,
  InfoContainer,
  VideoContainer,
} from "./styles";
import { useMovieDetails } from "../../context";
import { useEffect, useState } from "react";

export default function MainMovie() {
  const [keyVideo, setKeyVideo] = useState<string | undefined>();
  const { selectedMovie } = useMovieDetails();

  const { backdrop_path, overview, title, id } = selectedMovie;

  const normalizedPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  async function getDetailMovie() {
    if (!id) return;

    const api_key = "4e9cbdb6188d564ab3062e486d67953a";
    const api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=pt-BR`;

    const res: { results: { key: string }[] } = await fetch(api)
      .then((res) => res.json())
      .catch((error) => console.log(error));

    setKeyVideo(res.results[0]?.key);
  }

  function renderBackground() {
    if (!keyVideo) {
      return <ImgBanner src={normalizedPath} alt="banner" />;
    }
    const path = `https://www.youtube.com/embed/${keyVideo}?autoplay=1&start=38&controls=0&loop=1`;

    return (
      <VideoContainer>
        <iframe
          width="100%"
          height="1080"
          src={path}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </VideoContainer>
    );
  }
  return (
    <ContainerMain>
      {renderBackground()}
      <InfoContainer>
        <CategoryText name="Ação" />

        <ContainerStar>
          {[1, 2, 3, 4, 5].map((e) => {
            return <StarImg key={e} src={star} alt="card" />;
          })}
        </ContainerStar>

        <Title>{title}</Title>
        <DescriptionText>{overview}</DescriptionText>

        <Button>Assistir agora</Button>
      </InfoContainer>
    </ContainerMain>
  );
}
