import { Container } from "./components/index";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Container className="overflow-hidden">
        <Routes />
      </Container>
    </div>
  );
}

export default App;
