import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';

export default function Page404(): React.JSX.Element {
  return (
    <>
      <h1>Ошибка 404. Такой страницы не существует</h1>
      <Link to={AppRoute.Main}>Нажмите чтобы вернуться на главную страницу</Link>
    </>
  );
}
