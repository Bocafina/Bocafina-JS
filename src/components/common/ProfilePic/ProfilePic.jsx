import { Image } from "react-bootstrap";
import "./profilePic.scss";

const ProfilePic = (props) => {
	return (
		<>
			<div className="profilePicSize me-2 d-flex position-relative">
				<div className="profilePicFrameSize">
					<Image
						className="position-absolute z-10"
						src="../../src/assets/svg/profilepicframe.svg"
						alt="Profile frame"
					/>
				</div>
				<div className="profilePicCatSize ">
					<Image
						className="zn-5"
						src={`../../src/assets/img/${props.profilePicSrc}`}
						alt="Profile picture"
					/>
				</div>
			</div>
		</>
	);
};

export default ProfilePic;
