import LoginScreenView from "./LoginScreenView";

import "./loginScreen.scss";

const LoginScreen = () => {
	// exemple de logique à placer dans ce fichier :
	const lafunc = () => {
		return "c'est la fonction passée en props";
	};

	return (
		<>
			<LoginScreenView />
		</>
	);
};

export default LoginScreen;
