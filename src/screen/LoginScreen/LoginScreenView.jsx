import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";

import "./loginScreenView.scss";
import BtnBlackGreen from "../../components/common/BtnBlackGreen/BtnBlackGreen";

const LoginScreenView = (props) => {
	return (
		<>
			{/* header page */}
			<div className="flex-between mb-4">
				<div className="flex-between ms-2 mt-3">
					<div>
						<Link to="">
							<ProfilePic profilePicSrc="profilepiccat.png" />
						</Link>
					</div>
					<div>
						<h4 className="text-secondary">CatUserUUID</h4>
					</div>
				</div>
				<div className="posSettings">
					<Image
						className=""
						src="../../src/assets/svg/settings.svg"
						alt="Icone des paramètres"
					/>
				</div>
			</div>

			{/* ligne de séparation */}
			<hr className="text-secondary opacity-line full-width-line" />

			{/* formulaire de connexion */}
			<form className="input-group text-secondary">
				<label className="mb-1 ms-3" htmlFor="email">
					email
				</label>
				<br />
				<input
					className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent"
					name="email"
					id="email"
					placeholder="(exemple: votrenom@domaine.com)"
				/>
				<br />
				<div className="input-group position-relative d-flex justify-content-between w-100">
					{/* image du chat qui grimpe */}
					<div className="posCatClaws">
						<Image
							className=""
							src="../../src/assets/img/scratch-gray.png"
							alt="Image de chat qui grimpe"
						/>
					</div>
					<label className="mb-1 ms-3" htmlFor="password">
						mot de passe
					</label>
					<Link to="">
						<span className="me-3 sizeForgottenPassword text-secondary">
							mot de passe oublié ?
						</span>
					</Link>
				</div>
				<input
					className="w-100 mb-3 mx-3 p-1 rounded-3 bg-transparent"
					type="password"
					name="password"
					id="password"
					placeholder="Votre mot de passe"
				/>
			</form>

			{/* bouton de connection + rester ou non connecté */}
			<div className="btn-connexion mt-5">
				<BtnBlackGreen btnName="se connecter" />
			</div>
			<div className="d-flex align-items-center justify-content-center checkboxBorderColor">
				{/* aria-label use pr fournir étiquette textuelle = accessibilité (pas nécessaire si déjà placeholder présent)*/}
				<input
					className="form-check-input mt-0"
					type="checkbox"
					value=""
					aria-label="Case à cocher pour rester connecté(e)"
				></input>
				<label className="ms-2 text-secondary">Rester connecté(e)</label>
			</div>

			{/* ligne de séparation */}
			<hr className="text-secondary my-4 mx-5 opacity-line" />

			{/* nouveau profil texte + bouton */}
			<div className="posNewProfile d-flex flex-column justify-content-center align-items-center text-center">
				<span className="text-secondary mx-4">Nouveau sur Bocafina ?</span>
				<span className="text-secondary mx-4">
					Rejoignez-nous pour débloquer la création et le partage de recettes à
					votre image.
				</span>
			</div>
			<div className="btn-connexion mt-2">
				<BtnBlackGreen btnName="créer un profil" />
			</div>
		</>
	);
};

export default LoginScreenView;

//exemple de logique à placer dans ce fichier :
// const LoginScreenView = (props) => {
// 	return (
// 		<>
// 			<h1>{props.func()}</h1>
// 		</>
// 	);
// };