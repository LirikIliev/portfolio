export const sliceFirstTenResultsFromData = <T, K extends keyof T>(
  data: T[],
  key: K
): T[] => {
  if (data.length > 1) {
    return JSON.parse(JSON.stringify(data))
      .sort((dataA: T, dataB: T) => {
        // Ensure the values are numbers for sorting
        const valueA = dataA[key] as unknown as number;
        const valueB = dataB[key] as unknown as number;
        return valueB - valueA;
      })
      .slice(1, 10);
  }
  return [];
};
