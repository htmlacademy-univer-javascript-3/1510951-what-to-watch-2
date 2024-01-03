import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';

export default function Page404(): React.JSX.Element {
  return (
    <>
      <h1>Ошибка 404. Страница не найдена.</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </>
  );
}
