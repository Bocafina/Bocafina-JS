import GroceriesList from "../components/common/GroceriesList/GroceriesList";
import BtnBlackGreen from "../components/common/BtnBlackGreen/BtnBlackGreen";

export default function GroceriesScreen() {
  return (
    <>
      <div className="">
        <h4 className="text-secondary mt-3 mb-4">Liste de courses</h4>
        <GroceriesList />
        <BtnBlackGreen btnName="ajouter un ingrédient" />
      </div>
    </>
  );
}
