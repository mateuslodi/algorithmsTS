import logger from "../../lib/logger";
import { calculateMeetingDate } from "./service/meetingCalculator";

logger.info("Starting calculateMeetingDate module");

const initialDate = "25/05/2024";
const incrementDays = 60;

try {
	const result = calculateMeetingDate(initialDate, incrementDays);
	logger.info(`Result: ${result}`);
} catch (error) {
	logger.error(`Error on calculateMeetingDate module: ${error}`);
}
