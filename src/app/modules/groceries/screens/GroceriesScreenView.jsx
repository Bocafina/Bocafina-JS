import GroceriesList from "../components/GroceriesList/GroceriesList";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";

export default function GroceriesScreenView(props) {
  return (
    <>
      <div className="">
        <h4 className="text-secondary mt-3 mb-4">Liste de courses</h4>
        <GroceriesList ingredients={props.ingredients} />
        <BtnBlackGreen btnName="ajouter un ingrédient" />
      </div>
    </>
  );
}
