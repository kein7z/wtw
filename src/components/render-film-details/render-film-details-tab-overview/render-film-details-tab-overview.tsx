import { useAppSelector } from '../../../hooks';
import { getFilm } from '../../../store/film-process/selectors';

const RenderFilmDetailsTabOverview = () => {
  const film = useAppSelector(getFilm);

  return (
    <div className="film-card__text">
      <p>{film?.description}</p>
      <p className="film-card__director">
        <strong>Director: {film?.director}</strong>
      </p>
      <p className="film-card__starring">
        <strong>
          Starring:
          {film?.starring.join(', ')}
          and other
        </strong>
      </p>
    </div>
  );
};

export default RenderFilmDetailsTabOverview;
