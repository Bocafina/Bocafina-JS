import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

const GroceriesListLi = (props) => {
  const ingredientsList = props.ingredientsList;
  const ingredientsArray = ingredientsList.ingredientsArray;

  const groupedIngredients = {};

  ingredientsArray.forEach((ingredient) => {
    const type = ingredient.ingredientType;

    if (!groupedIngredients[type]) {
      groupedIngredients[type] = [];
    }

    groupedIngredients[type].push(ingredient);
  });

  const listGoupItem = Object.keys(groupedIngredients).map((type) => (
    <ListGroup variant="flush" key={type}>
      <p className="text-secondary font-bold">{type}</p>
      {groupedIngredients[type].map((ingredient) => (
        <ListGroupItem key={ingredient.id} className=" bg-primary text-secondary">
          <div className="d-flex justify-content-between">
            <div className="d-flex w-100">
              <img src={ingredient.src} alt="image ingrédient" />
              <span className="ms-2">{ingredient.name}</span>
            </div>
            <Form.Check />
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  ));

  return (
    <>
      <h5 className="text-secondary p-1 m-1">{ingredientsList.namelist}</h5>
      {listGoupItem}
    </>
  );
};

export default GroceriesListLi;
