import DateNavigator from "../../components/common/DateNavigator/DateNavigator";
import ListWrapper from "../../components/mobile/ListWrapper/ListWrapper";

import "./menusScreen.scss";

export default function MenusScreen() {
	return (
		<>
			<div className="container-fluid">
				<h4 className="text-secondary my-3">Planificateur de repas</h4>
				<DateNavigator />
				<ListWrapper />
			</div>
		</>
	);
}
