import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import { Button } from "react-bootstrap";

import "./CreateAccountScreenView.scss";
import BtnBlackGreen from "../../components/common/BtnBlackGreen/BtnBlackGreen";

const CreateAccountScreenView = (props) => {
  return (
    <>
      <header>
        <div className="d-flex justify-content-center m-4">
          <ProfilePic profilePicSrc="profilepiccat.png" />
        </div>
      </header>

      <form className="input-group text-secondary">
        <label className="mb-1 ms-3" htmlFor="userName">
          nom utilisateur
        </label>
        <br />
        <input
          className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent"
          name="userName"
          id="userName"
          placeholder={props.userUUID}
        />
        <br />

        <label className="mb-1 ms-3" htmlFor="email-CA">
          email
        </label>
        <br />
        <input className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent" name="email-CA" id="email-CA" />
        <br />

        <label className="mb-1 ms-3" htmlFor="password-CA">
          mot de passe
        </label>
        <br />
        <input className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent" name="password-CA" id="password-CA" />
        <br />

        <label className="mb-1 ms-3" htmlFor="password-verification-CA">
          vérification mot de passe
        </label>
        <br />
        <input
          className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent"
          name="password-verification-CA"
          id="password-verification-CA"
        />
        <br />
        <div className="d-flex justify-content-center mt-2 w-100">
          <div className="btn-createAccount ">
            <BtnBlackGreen btnName="enregistrer" />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccountScreenView;
