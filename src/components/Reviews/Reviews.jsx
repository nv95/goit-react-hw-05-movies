import { qetMovieReview } from 'components/Services/Services';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    qetMovieReview(movieId).then(data => setReviewInfo(data.results));
  }, [movieId]);
  return (
    <ul>
      {reviewInfo.length > 0
        ? reviewInfo.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
  );
};
