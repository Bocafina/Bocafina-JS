import { Link } from "react-router-dom"

export default function PageNotFound() {

    return (
        <>
        <h1 className="text-secondary" >Qu est ce que tu fous là </h1>
        <Link to="/"><p>go back to home page</p></Link>
        </>
    )
}