import { Link } from "react-router-dom";

export default function PageNotFoundScreen() {
  return (
    <>
      <h1>What did u do ???</h1>
      <Link to="/">
        <p>Go back to the Home Page !</p>
      </Link>
    </>
  );
}
