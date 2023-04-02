import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, Character, Name } from './Cast.styled';
import { useEffect } from 'react';
import { qetMovieCredits } from 'components/Services/Services';

export const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    qetMovieCredits(movieId).then(data => setCastList(data.cast));
  }, [movieId]);
  return (
    <CastList>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <Name>{name}</Name>
              <Character> Character: {character}</Character>
            </CastItem>
          ))
        : "Sorry, there isn't any info :("}
    </CastList>
  );
};
