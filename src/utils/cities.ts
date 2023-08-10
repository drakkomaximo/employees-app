import allCities from "all-countries-and-cities-json";

// new cities to add in minus
const aditionalCities = ["bogotá", "cali", "ibagué"];

export const cityOptions = Array.from(
  new Set([
    ...aditionalCities,
    ...Object.values(allCities)
      .flatMap((cities) => cities)
      .map((city) => city.toLowerCase()),
  ])
).sort();
