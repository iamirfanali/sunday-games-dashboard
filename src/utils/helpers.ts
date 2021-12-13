export const getAverage = (arr: any[], value: string) => {
  const average = arr?.reduce((r: any, c: { [x: string]: any }) => r + c[value], 0) / arr.length;
  return Math.round(average);
};

export const extractArray = (arr: any[] | undefined, value: string) => {
  return arr?.map((el) => el[value]);
};
