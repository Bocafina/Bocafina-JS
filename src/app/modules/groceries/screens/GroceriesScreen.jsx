import GroceriesScreenView from "./GroceriesScreenView";
import { ingredientsListData } from "../../../../data/groceriesListData.js";

export default function GroceriesScreen() {
  return (
    <>
      <GroceriesScreenView ingredients={ingredientsListData} />
    </>
  );
}
