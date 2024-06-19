import { Container } from "react-bootstrap";

import NavbarDesktop from "./layout/desktop/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./layout/NavbarMobile/NavbarMobile";
import Header from "./layout/desktop/Header/Header";
import Routing from "./Routes";

function App() {
  return (
    <>
      <Container fluid className="app-container d-flex g-0">
        <NavbarDesktop />
        <div className="d-flex flex-column flex-grow-1">
          <Header />
          <main>
           <Routing/>
          </main>
        </div>
      </Container>
      <NavbarMobile />
    </>
  );
}

export default App;
