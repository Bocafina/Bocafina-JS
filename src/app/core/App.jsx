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
					<div className="app-header">
						<Header />
					</div>
					<div className="app-content flex-grow-1">
						<main>
							<Routing />
						</main>
					</div>
				</div>
			</Container>
			<NavbarMobile />
		</>
	);
}

export default App;
