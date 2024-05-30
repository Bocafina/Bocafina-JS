import GroceriesList from "../components/common/GroceriesList/GroceriesList";
import BtnBlackGreen from "../components/common/BtnBlackGreen/BtnBlackGreen";

export default function GroceriesScreen() {
  return (
		<>
			<div className="container-fluid">
				<h4 className="text-secondary mt-3">Liste de courses</h4>
				<GroceriesList />
				<BtnBlackGreen className="" btnName="ajouter un ingredient" />
			</div>
		</>
	);
}
