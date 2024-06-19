import ProfilePic from "../../layout/ProfilePic/ProfilePic";

import "./CreateAccountScreenView.scss";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";
import BackButtonMobile from "../../../shared/components/BackButton/BackButtonMobile";

const CreateAccountScreenView = (props) => {
  return (
    <>
      <header>
        <BackButtonMobile to="/profiles/login" btnText="Créer un profil" />
        <div className="d-flex justify-content-center m-4">
          <ProfilePic profilePicSrc={props.profileImg} />
        </div>
      </header>

      <form className="input-group text-secondary" noValidate>
        <div className="input-group position-relative d-flex mb-2">
          <label className="mb-1 ms-3" htmlFor="userName">
            nom utilisateur *
          </label>

          <input
            className="w-100  mx-3 p-1 rounded-3 bg-transparent inputStyle form-control"
            name="userName"
            id="userName"
            placeholder={props.userUUID}
          />
          <span className="ms-3">
            {" "}
            <small>Il sera affiché sur votre profil et vos recettes.</small>
          </span>

          <div></div>
        </div>

        <div className="input-group position-relative d-flex">
          <label className="mb-1 ms-3" htmlFor="email-CA">
            email *
          </label>
          <input
            className="w-100 mb-4 mx-3 p-1 rounded-3 bg-transparent inputStyle form-control"
            name="email-CA"
            id="email-CA"
          />
        </div>

        <div className="input-group position-relative d-flex">
          <label className="mb-1 ms-3" htmlFor="password-CA">
            mot de passe *
          </label>
          <input
            className="w-100 mb-1 mx-3 p-1 rounded-3 bg-transparent inputStyle form-control"
            name="password-CA"
            id="password-CA"
          />
        </div>

        <div className="input-group position-relative d-flex ">
          <label className="mb-1 ms-3" htmlFor="password-verification-CA">
            vérification mot de passe *
          </label>
          <input
            className="w-100 mx-3 p-1 rounded-3 bg-transparent inputStyle form-control"
            name="password-verification-CA"
            id="password-verification-CA"
          />
          <span className="ms-3">
            {" "}
            <small>champs obligatoires *</small>
          </span>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="btn-createAccount ">
            <BtnBlackGreen btnName="enregistrer" />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccountScreenView;
