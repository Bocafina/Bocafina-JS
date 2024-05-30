import LoginScreenView from "./LoginScreenView";

import "./loginScreen.scss";

const LoginScreen = () => {
	return (
		<>
			<div className="container-fluid">
				<LoginScreenView />
			</div>
		</>
	);
};

export default LoginScreen;

// const LoginScreen = () => {
// 	// exemple de logique à placer dans ce fichier :
// 	const lafunc = () => {
// 		return "c'est la fonction passée en props";
// 	};

// 	return (
// 		<>
// 			<LoginScreenView func={lafunc} />
// 		</>
// 	);
// };
