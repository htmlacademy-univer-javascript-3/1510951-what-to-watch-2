import { Link } from 'react-router-dom';

export default function PageNotFound(): React.JSX.Element {
  return (
    <>
      <h1>Ошибка 404</h1>
      <h2>Такой страницы не существует</h2>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}
