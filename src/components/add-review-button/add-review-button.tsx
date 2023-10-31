import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selectors';
import { AppRoute } from '../../const';

const AddReviewButton = () => {
  const film = useAppSelector(getFilm);

  return (
    <Link to={`/${AppRoute.Film}/${film?.id}/review`} className="btn film-card__button">
      Add review
    </Link>
  );
};

export default AddReviewButton;
