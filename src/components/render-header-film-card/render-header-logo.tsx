import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export type RenderHeaderLogoProps = {
  isLight: boolean
}

const RenderHeaderLogo = ({isLight}: RenderHeaderLogoProps) => (
  <div className="logo">
    <Link to={AppRoute.Main} className={`logo__link ${isLight ? 'logo__link--light' : null}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default RenderHeaderLogo;
