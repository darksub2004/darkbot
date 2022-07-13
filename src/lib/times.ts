import { Time } from '@sapphire/time-utilities';
import { roundNumber } from '@sapphire/utilities';

export function seconds(second: number) {
	return second * Time.Second;
}

seconds.fromMilliseconds = (value: number) => {
	return roundNumber(value / Time.Second);
};

export function minutes(minute: number) {
	return minute * Time.Minute;
}

minutes.toSeconds = (value: number) => {
	return roundNumber(minutes(value) / Time.Second);
};

export function hours(hour: number) {
	return hour * Time.Hour;
}

export function days(day: number) {
	return day * Time.Day;
}

export function months(month: number) {
	return month * Time.Month;
}

export function years(year: number) {
	return year * Time.Year;
}
