import RenderHeaderFillmCard from '../../components/render-header-film-card/render-header-film-card';
import RenderFilmsList from '../../components/render-films-list.tsx/render-films-list';
import RenderHeaderLogo from '../../components/render-header-film-card/render-header-logo';

const MainScreen = () => (
  <>
    <RenderHeaderFillmCard />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <RenderFilmsList />
      </section>
      <footer className="page-footer">
        <RenderHeaderLogo isLight/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
);

export default MainScreen;
