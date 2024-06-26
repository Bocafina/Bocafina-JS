import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ThreeDotBtn from "../ThreeDotBtn/ThreeDotBtn";
import ProfilePic from "../../../core/layout/ProfilePic/ProfilePic";

import { addCookbookIcon } from "../../../../assets/svg/icon/_icon";

import "./recipeCard.scss";

const RecipesCardDisplay = (props) => {
  const hasHeader = props.isHomeScreen;
  let header;

  if (hasHeader) {
    header = (
			<>
				<Card.Header className="bg-primary">
					<div className="recipes-card-section flex-between">
						<div className="d-flex align-items-center">
							<ProfilePic profilePicSrc="profilepiccat.png" />
							<h5 className="text-secondary ms-2 d-UserName">
								{props.profilName}
							</h5>
						</div>

						<ThreeDotBtn />
					</div>
				</Card.Header>

				<Card.Img className="rounded-0" variant="top" src={props.imageSrc} />
			</>
		);
  } else {
    header = (
      <>
        <Card.Img className="" variant="top" src={props.imageSrc} />
      </>
    );
  }

  return (
    <>
      <div className={props.className}>
        <Link to={"/recipes/" + props.to}>
          <Card className={props.shadow}>
            {header}
            <Card.Footer className="bg-primary">
              <div className="recipes-card-section flex-between">
                <h5 className="text-secondary">{props.recipeTitle}</h5>
                <button>
                  <img src={addCookbookIcon} alt="addCookbook" />
                </button>
              </div>
            </Card.Footer>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default RecipesCardDisplay;
