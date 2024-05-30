import "./loginScreenView.scss";

const LoginScreenView = (props) => {
	return (
		<>
			<h1>{() => props.func()}</h1>
		</>
	);
};

export default LoginScreenView;
