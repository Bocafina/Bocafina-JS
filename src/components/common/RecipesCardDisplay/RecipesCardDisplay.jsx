import { Button, Card } from "react-bootstrap";

import ThreeDotBtn from "./ThreeDotBtn/TreeDotBtn";

import "./recipesCardDisplay.scss";

const RecipesCardDisplay = (props) => {
  return (
    <>
      <Card>
        <Card.Header className="bg-primary">
          <div className="recipes-card-section">
            <h5>{props.profilName}</h5>
            <ThreeDotBtn/>
          </div>
        </Card.Header>

        <Card.Img className="rounded-0" variant="top" src={props.imageSrc} />

        <Card.Footer className="bg-primary">
          <div className="recipes-card-section">
            <h5>{props.recipeTitle}</h5>
            <Button>btn</Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default RecipesCardDisplay;
