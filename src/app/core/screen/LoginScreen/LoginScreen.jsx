import LoginScreenView from "./LoginScreenView";
import profileImg from "/profilepiccat.png";

const LoginScreen = () => {
  return (
    <>
      <div className="container-fluid">
        <LoginScreenView profileImg={profileImg} />
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
