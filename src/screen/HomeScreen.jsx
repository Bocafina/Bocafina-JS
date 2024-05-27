import { Image, Row, Col } from "react-bootstrap";

import ProfilePic from "../components/common/ProfilePic/ProfilePic";
import Logo from "../components/common/Logo/Logo";

import "./styles/homescreen.scss";

export default function HomeScreen() {
	return (
		<>
			<div className="container-fluid">
				<div className="flex-nowrap">
					<div>
						<Logo />
					</div>
					<div className="d-flex align-items-start justify-content-start">
						<Image
							className="mt-5  ms-2 w-50"
							src="../../src/assets/svg/notification-icon.svg"
							alt="Notification icon"
						/>
					</div>
					<div className="posProfilePic">
						<ProfilePic />
					</div>
				</div>
				<h1>Home Page</h1>
			</div>
		</>
	);
}
