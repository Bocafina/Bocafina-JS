import DateNavigator from "../components/DateNavigator/DateNavigator";
import ListWrapper from "../components/ListWrapper/ListWrapper";

import "./plannerScreen.scss";

export default function PlannerScreenView() {
  return (
    <>
      <div>
        <h4 className="text-secondary my-3">Planificateur de repas</h4>
        <DateNavigator />
        <ListWrapper />
      </div>
    </>
  );
}
