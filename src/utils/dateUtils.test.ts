import {
	formatDate,
	incrementDaysOnDateAndSkipWeekends,
	stringToDate
} from "./dateUtils";

describe("stringToDate", () => {
	test("should convert a valid date string to a Date object", () => {
		const dateString = "24/05/2024";
		const expectedDate = new Date("2024-05-24T00:00:00");

		expect(stringToDate(dateString)).toEqual(expectedDate);
	});

	test("should throw an error for an invalid date string", () => {
		const dateString = "Not a date";

		expect(() => stringToDate(dateString)).toThrow("Invalid date format");
	});
});
describe("formatDate", () => {
	test('should format a date to a string in the format "dd/mm/yyyy"', () => {
		const date = new Date("2024-05-24T00:00:00");
		const expectedDateString = "24/05/2024";

		expect(formatDate(date)).toEqual(expectedDateString);
	});

	test("should throw an error for an invalid date", () => {
		const invalidDate = new Date("Not a date");

		expect(() => formatDate(invalidDate)).toThrow("Invalid date");
	});
});

describe("incrementDaysOnDateAndSkipWeekends", () => {
	test("should increment the given number of days and is saturday, skip weekends", () => {
		const date = new Date("2024-05-24T00:00:00");
		const days = 1;
		const expectedDate = new Date("2024-05-27T00:00:00");

		expect(incrementDaysOnDateAndSkipWeekends(date, days)).toEqual(
			expectedDate
		);
	});

	test("should increment the given number of days and is sunday, skip weekends", () => {
		const date = new Date("2024-05-25T00:00:00");
		const days = 1;
		const expectedDate = new Date("2024-05-27T00:00:00");

		expect(incrementDaysOnDateAndSkipWeekends(date, days)).toEqual(
			expectedDate
		);
	});

	test("should incrementing days", () => {
		const date = new Date("2024-05-24T00:00:00");
		const days = 60;
		const expectedDate = new Date("2024-07-23T00:00:00");

		expect(incrementDaysOnDateAndSkipWeekends(date, days)).toEqual(
			expectedDate
		);
	});

	test("should skip weekends when incrementing days and handle leap year", () => {
		const date = new Date("2024-05-24T00:00:00");
		const days = 367;
		const expectedDate = new Date("2025-05-26T00:00:00");

		expect(incrementDaysOnDateAndSkipWeekends(date, days)).toEqual(
			expectedDate
		);
	});
});
