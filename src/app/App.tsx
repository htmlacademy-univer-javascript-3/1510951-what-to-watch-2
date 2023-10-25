import Main from "../pages/main/Main";
import { dataForPreviewFilm } from "..";


const App = (): JSX.Element => (
    <Main title={dataForPreviewFilm.title} genre={dataForPreviewFilm.genre} date={dataForPreviewFilm.date} />
)
export default App;
