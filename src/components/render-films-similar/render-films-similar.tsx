import { MAX_NUMBER_OF_SIMILAR_FILMS } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmsSimilar } from '../../store/films-similar-process/selectors';
import RenderFilmsCard from '../render-films-list.tsx/render-films-card/render-films-card';
import RenderHeaderLogo from '../render-header-film-card/render-header-logo';

const RenderFilmsSimilar = () => {
  const films = useAppSelector(getFilmsSimilar);

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {films.slice(0, MAX_NUMBER_OF_SIMILAR_FILMS).map((item) => (<RenderFilmsCard key={item.id} {...item} />))}
        </div>
      </section>
      <footer className="page-footer">
        <RenderHeaderLogo isLight />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default RenderFilmsSimilar;
