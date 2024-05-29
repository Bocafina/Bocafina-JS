import DateNavigator from "../../components/common/DateNavigator/DateNavigator";
import ListWrapper from "../../components/mobile/ListWrapper/ListWrapper";

import "./menusScreen.scss";

export default function MenusScreen() {
	return (
		<>
			<h4 className="text-secondary ms-3 mt-3">Planificateur de repas</h4>
			<DateNavigator />
			<ListWrapper />
		</>
	);
}
