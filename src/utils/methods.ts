import { suffixYear } from ".";

export const simulateApiCall = async <T>(data: T, delay = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const formattedSuffixYear = (value: string) => {
  if (value) {
    const splitValue = value.split(suffixYear);
    return `${suffixYear}${parseInt(splitValue[0]) !== 1 ? 's' : ''}`;
  } else {
    return suffixYear;
  }
};
