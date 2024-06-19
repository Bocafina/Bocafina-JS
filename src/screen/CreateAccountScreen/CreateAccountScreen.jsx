import CreateAccountScreenView from "./CreateAccountScreenView";
import profileImg from "/profilepiccat.png";

const CreateAccountScreen = () => {
  return (
    <>
      <div className="container-fluid">
        <CreateAccountScreenView profileImg={profileImg} userUUID="CatUserUUID" />
      </div>
    </>
  );
};

export default CreateAccountScreen;
