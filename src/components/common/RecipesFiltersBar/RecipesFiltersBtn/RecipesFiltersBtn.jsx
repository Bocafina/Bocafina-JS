import { Button } from 'react-bootstrap';
import './recipesFiltersBtn.scss';

const RecipesFiltersBtn = (props) => {

    

    return (
        <>

        <Button onClick={() => props.func()}>{props.btnName}</Button>
        
        </>
    )

};

export default RecipesFiltersBtn;