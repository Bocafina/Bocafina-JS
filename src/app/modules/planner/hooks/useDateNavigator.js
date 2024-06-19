import { useState } from "react";

const useDateNavigator = () => {
	// current = valeur actuelle / setcurrent = fonction qui met à jour valeur
	const [currentDate, setCurrentDate] = useState(new Date());
	// useState initialise currentDate avec date actuelle

	// getWeekRange = fonction qui calcule (l.11 à 15)
  // formate (l.17 à 19)
  // et retourne la date de début et de fin de la semaine (l.20)
	const getWeekRange = (date) => {
		const startOfWeek = new Date(date);
		startOfWeek.setDate(date.getDate() - date.getDay() + 1);
		const endOfWeek = new Date(startOfWeek);
		endOfWeek.setDate(startOfWeek.getDate() + 6);

		const options = { day: "2-digit", month: "short" };
		const start = startOfWeek.toLocaleDateString("fr-FR", options);
		const end = endOfWeek.toLocaleDateString("fr-FR", options);
		return `${start} - ${end}`;
	};

	// changeWeek = fonction qui permet de changer de semaine
	const changeWeek = (weeks) => {
		const newDate = new Date(currentDate);
		newDate.setDate(currentDate.getDate() + weeks * 7);
		setCurrentDate(newDate);
	};

	return { currentDate, getWeekRange, changeWeek };
};

export default useDateNavigator;
