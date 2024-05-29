import GroceriesList from "../components/common/GroceriesList/GroceriesList";
import BtnBlackGreen from "../components/common/BtnBlackGreen/BtnBlackGreen";

export default function GroceriesScreen() {
  return (
    <>
      <div className="container-fluid">
        <GroceriesList />
        
        <BtnBlackGreen className="" btnName="ajouter un ingredient" />
      </div>
    </>
  );
}
