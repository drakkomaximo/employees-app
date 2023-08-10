import allCities from 'all-countries-and-cities-json';

export const cityOptions = Array.from(new Set(
    Object.values(allCities)
      .flatMap((cities) => cities)
      .map((city) => city.toLowerCase())
  ))
  .sort();