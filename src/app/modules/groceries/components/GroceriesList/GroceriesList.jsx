// TODO: Remplacer Local storage puis API quand back
//
//

//

import { Form } from "react-bootstrap";
import GroceriesListLi from "../GrocerieListLi/GroceriesListLi";

import "./groceriesList.scss";

const GroceriesList = (props) => {
  let ingredientsList = props.ingredients;

  return (
    <>
      <Form className="bg-groceries-list rounded-3 pb-3 m-2">
        <GroceriesListLi ingredientsList={ingredientsList} />
      </Form>
    </>
  );
};

export default GroceriesList;
