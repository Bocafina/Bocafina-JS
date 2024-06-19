

import { cookBookScreenReicipesData } from "../../../../data/cookbookScreenRecipesData";
import CookBookScreenView from "./CookBookScrennView";

export default function CookBookScreen() {
  return (
    <>
      <div>
        <CookBookScreenView recipies={cookBookScreenReicipesData} />
      </div>
    </>
  );
}
