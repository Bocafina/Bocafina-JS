import { Image } from "react-bootstrap";
import "./profilepic.scss";

const ProfilePic = () => {
	return (
		<>
			<div className="profilePicSize me-2 d-flex position-relative">
				<div className="profilePicFrameSize">
					<Image
						className="position-absolute z-2"
						src="../../src/assets/svg/profilepicframe.svg"
						alt="Profile frame"
					/>
				</div>
				<div className="profilePicCatSize">
					<Image
						className="zn-1"
						src="../../src/assets/img/profilepiccat.png"
						alt="Profile picture"
					/>
				</div>
			</div>
		</>
	);
};

export default ProfilePic;
