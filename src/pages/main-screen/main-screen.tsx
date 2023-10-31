import RenderHeaderFillmCard from '../../components/render-header-film-card/render-header-film-card';
import RenderFilmsList from '../../components/render-films-list.tsx/render-films-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const MainScreen = () => (
  <>
    <RenderHeaderFillmCard />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <RenderFilmsList />
      </section>
      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
);

export default MainScreen;
