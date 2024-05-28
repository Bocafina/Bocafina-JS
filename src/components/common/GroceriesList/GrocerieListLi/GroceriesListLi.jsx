import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

const GroceriesListLi = (props) => {
  const ingredientsList = props.ingredientsList;
  const ingredientsArray = ingredientsList.ingredientsArray;

  const listGoupItem = ingredientsArray.map((ingredient) => (
    <ListGroupItem key={ingredient.id} className="bg-primary text-secondary">
      <div className="d-flex justify-content-between">
        <div className="d-flex w-100">
          <img src={ingredient.src} alt="image ingrédient" />
          <span className="ms-2">{ingredient.name}</span>
        </div>
        <Form.Check />
      </div>
    </ListGroupItem>
  ));

  

  return (
    <>
      <ListGroup variant="flush">
        <p className="text-secondary">{ingredientsList.namelist}</p>
        {listGoupItem}
      </ListGroup>
    </>
  );
};

export default GroceriesListLi;
