import { Container } from "./components/index";
// import Login from "./pages/login/Login";
 
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <Navbar />
        <Row className="bg-gray-200 w-full h-60 my-10" />
        <Row className="bg-gray-200 w-full h-60 my-10"  />
        <Row  className="bg-gray-200 w-full h-60 my-10" />
        <Row className="bg-gray-200 w-full h-60 my-10" />
        <Row />
        <Row />
        <Row className="member-footer" /> */}
         <Routes />
      </Container>
    </div>
  );
}

export default App;
