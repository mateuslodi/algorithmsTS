import {
	formatDate,
	incrementDaysOnDateAndSkipWeekends,
	stringToDate
} from "../../../utils/dateUtils";
import logger from "../../../lib/logger";

export function calculateMeetingDate(
	initialDate: string,
	incrementDays: number
) {
	logger.info(`calculateMeetingDate method: ${initialDate}, ${incrementDays}`);
	try {
		const parsedDate = stringToDate(initialDate);
		logger.info(`parsedToDateResult: ${parsedDate}`);

		const resultIncrementedDate = incrementDaysOnDateAndSkipWeekends(
			parsedDate,
			incrementDays
		);
		logger.info(`resultIncrementedDate: ${resultIncrementedDate}`);

		const finalDate = formatDate(resultIncrementedDate);
		logger.info(`finalDate: ${finalDate}`);

		return finalDate;
	} catch (error) {
		logger.error(`Error on calculateMeetingDate method: ${error}`);
		throw error;
	}
}
