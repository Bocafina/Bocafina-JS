

import { cookbookScreenRecipesData } from "../../../../data/cookbookScreenRecipesData";
import CookbookScreenView from "./CookbookScreenView";

export default function CookBookScreen() {
  return (
    <>
      <div>
        <CookbookScreenView recipes={cookbookScreenRecipesData} />
      </div>
    </>
  );
}
