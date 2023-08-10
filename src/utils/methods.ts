import { prefixMoney, suffixYear } from ".";

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

export const removeLeadingZeros = (input: string) => {
  const separatePrefix = input.split(prefixMoney)
  const parts = separatePrefix[1].split(".");
  const integerPart = parts[0].replace(/^0+/, "");
  
  return `${prefixMoney}${integerPart}${parts.length > 1 ? "." + parts.slice(1).join(".") : ''}`
}

export const calculateAgeInYears = (hireDate: string): number => {
  const today = new Date();
  const hireDateObj = new Date(hireDate);
  
  const timeDiffInMilliseconds = today.getTime() - hireDateObj.getTime();
  const timeDiffInYears = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  
  return timeDiffInYears;
}

export const extractYearsFromTimeInPosition = (timeInPosition: string): number => {
  const regex = /^(\d+)\s+years?$/i;
  const match = timeInPosition.match(regex);

  if (match && match[1]) {
    return parseInt(match[1], 10);
  }

  return 0;
}