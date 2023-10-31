import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFoundScreen = () => (
  <div>
    страница не найдена<br />
    <Link to={AppRoute.Main}>Можете вернуться на главную страницу</Link>
  </div>
);

export default NotFoundScreen;
