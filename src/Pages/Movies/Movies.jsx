import { Link, useSearchParams } from 'react-router-dom';
import { Label, Form, Input, Button } from './movies.styled';
import { useState } from 'react';
import { searchMovies } from 'components/Services/Services';
import { useEffect } from 'react';
import { Li } from 'Pages/Home/Home.styked';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [movieList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(true);
        return;
      }
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.target;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="search-input">Пошук:</Label>
        <Input
          type="text"
          id="movieName"
          name="movieName"
          placeholder="Введіть фільм для пошуку"
        />
        <Button type="submit">Пошук</Button>
      </Form>
      <ul>
        {movieList.map(movie => {
          return (
            <Li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title || movie.name}
              </Link>
            </Li>
          );
        })}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
