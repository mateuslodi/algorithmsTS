import {
	formatDate,
	incrementDaysOnDateAndSkipWeekends,
	stringToDate
} from "../../../utils/dateUtils";
import { calculateMeetingDate } from "./meetingCalculator";

jest.mock("../../../utils/dateUtils", () => ({
	stringToDate: jest.fn(),
	incrementDaysOnDateAndSkipWeekends: jest.fn(),
	formatDate: jest.fn()
}));

const stringToDateMock = stringToDate as jest.MockedFunction<
	typeof stringToDate
>;
const incrementDaysOnDateAndSkipWeekendsMock =
	incrementDaysOnDateAndSkipWeekends as jest.MockedFunction<
		typeof incrementDaysOnDateAndSkipWeekends
	>;
const formatDateMock = formatDate as jest.MockedFunction<typeof formatDate>;

describe("calculateMeetingDate", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should calculate the meeting date correctly", () => {
		const initialDate = "23/05/2024";
		const incrementDays = 6;
		const parsedDate = new Date("2024-05-25T00:00:00");
		const resultIncrementedDate = new Date("2024-07-27T00:00:00");
		const finalDate = "28/05/2024";

		stringToDateMock.mockReturnValue(parsedDate);
		incrementDaysOnDateAndSkipWeekendsMock.mockReturnValue(
			resultIncrementedDate
		);
		formatDateMock.mockReturnValue(finalDate);

		const result = calculateMeetingDate(initialDate, incrementDays);

		expect(stringToDateMock).toHaveBeenCalledWith(initialDate);
		expect(stringToDateMock.mock.calls.length).toBe(1);
		expect(incrementDaysOnDateAndSkipWeekendsMock).toHaveBeenCalledWith(
			parsedDate,
			incrementDays
		);
		expect(incrementDaysOnDateAndSkipWeekendsMock.mock.calls.length).toBe(1);
		expect(formatDateMock).toHaveBeenCalledWith(resultIncrementedDate);
		expect(formatDateMock.mock.calls.length).toBe(1);
		expect(result).toBe(finalDate);
	});

	test("should throw an error if there is an error in the calculation", () => {
		const initialDate = "24/05/2024";
		const incrementDays = 5;
		const error = new Error("Failed to calculate meeting date");

		stringToDateMock.mockImplementation(() => {
			throw error;
		});

		expect(() => calculateMeetingDate(initialDate, incrementDays)).toThrow(
			error
		);
		expect(stringToDateMock).toHaveBeenCalledWith(initialDate);
	});
});
