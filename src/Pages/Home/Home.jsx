import { Loader } from 'components/Loader/Loader';
import { getTrending } from 'components/Services/Services';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { H1, Li, Main } from './Home.styked';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoaidng, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <Main>
      <H1> Trending today </H1>
      <ul>
        {trendMovies.map(movie => (
          <Li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.original_title || movie.name}
            </Link>
          </Li>
        ))}
        {isLoaidng && <Loader />}
      </ul>
    </Main>
  );
};
export default Home;
