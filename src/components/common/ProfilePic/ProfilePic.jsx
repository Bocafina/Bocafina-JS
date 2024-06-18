import { Image } from "react-bootstrap";
import "./profilePic.scss";

import { profilePicFrame } from "../../../assets/svg/frame/_frame.js"


const ProfilePic = (props) => {
  return (
    <>
      <div className="profilePicSize d-flex justify-content-center position-relative">
        <div className="profilePicFrameSize">
          <Image
            className="position-absolute z-2"
            src={profilePicFrame}
            alt="Cadre autour du profile"
          />
        </div>
        <div className="profilePicCatSize ">
          <Image className="zn-1" src={props.profilePicSrc} alt="Image du profile" />
        </div>
      </div>
      <div className="text-secondary d-flex justify-content-center my-2 d-UserName">
        <p>CatUserUUID</p>
      </div>
    </>
  );
};

export default ProfilePic;
