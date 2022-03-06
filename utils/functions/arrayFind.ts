export default function arrayFind(
  arr: string[],
  search: string
): string | undefined {
  const result = arr.find((value) => value === search);
  return result;
}
