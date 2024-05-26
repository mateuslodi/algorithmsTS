import logger from "../lib/logger";

function stringToDate(dateString: string): Date {
	logger.info(`initializing stringToDate method: ${dateString}`);
	try {
		const [day, month, year] = dateString.split("/");
		const formattedDate = `${month}/${day}/${year}`;
		const date = new Date(formattedDate);

		if (isNaN(date.getTime())) {
			throw new Error("Invalid date format");
		}

		return date;
	} catch (error) {
		throw new Error("Invalid date format");
	}
}

function formatDate(date: Date): string {
	logger.info(`initializing formatDate method: ${date}`);
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
}

function incrementDaysOnDateAndSkipWeekends(
	initialDate: Date,
	days: number
): Date {
	logger.info(
		`initializing incrementDaysOnDateAndSkipWeekends method: ${initialDate}, ${days}`
	);
	const saturday = 6;
	const sunday = 0;
	const resultDate = new Date(initialDate.getTime());
	resultDate.setDate(resultDate.getDate() + Math.floor(days));

	if (resultDate.getDay() === saturday) {
		resultDate.setDate(resultDate.getDate() + 2);
	} else if (resultDate.getDay() === sunday) {
		resultDate.setDate(resultDate.getDate() + 1);
	}

	return resultDate;
}

export { stringToDate, formatDate, incrementDaysOnDateAndSkipWeekends };
