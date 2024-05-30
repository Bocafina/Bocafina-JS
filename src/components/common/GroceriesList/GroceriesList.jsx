// TODO: Remplacer Local storage puis API quand back
//
//
import { ingredientsListData } from "../../../data/groceriesListData";
//

import { Form } from "react-bootstrap";
import GroceriesListLi from "./GrocerieListLi/GroceriesListLi";

import "./groceriesList.scss";

const GroceriesList = () => {
  let ingredientsList = ingredientsListData;

  return (
    <>
      <Form className="bg-groceries-list rounded-3 pb-3 m-2">
        <GroceriesListLi ingredientsList={ingredientsList} />
      </Form>
    </>
  );
};

export default GroceriesList;
