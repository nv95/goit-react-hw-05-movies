import { Link, Outlet, useParams } from 'react-router-dom';
import {
  DivDetails,
  H,
  Img,
  Info,
  LinkBack,
  MovieCard,
  Pg,
  Po,
  Ul,
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { qetMovieDetails } from 'components/Services/Services';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    qetMovieDetails(movieId).then(data => {
      setMovieDetail(data);
    });
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreTofixed = score.toFixed(2);

  return (
    <main>
      <LinkBack to="/">
        <HiOutlineArrowLeft size={16} />
        Go back
      </LinkBack>
      <MovieCard>
        <Info>
          <Img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
            width={320}
            height={380}
            loading="lazy"
            alt="poster_path"
          />
          <DivDetails>
            <H>{original_title}</H>
            <H>User score: {scoreTofixed}%</H>
            <H>Overview:</H>
            <Po> {overview}</Po>
            <H>Ganres:</H>
            <Pg>
              {genres &&
                genres.length &&
                genres.map(({ id, name }) => <li key={id}>{name}</li>)}
            </Pg>
          </DivDetails>
        </Info>
      </MovieCard>
      <h2> Aditional information</h2>
      <Ul>
        <li>
          <Link to="Cast">{<div> Cast </div>} </Link>
        </li>
        <li>
          <Link to="reviews"> {<div> Reviews </div>} </Link>
        </li>
      </Ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
