import Header from "../components/Header";
import { MainContainer} from "../style";

function ErrorPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Página não encontrada 404</h1>
    </MainContainer>
  );
}

export default ErrorPage;