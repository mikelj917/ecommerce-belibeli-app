export function formatNumber(value: number) {
  return 10 > value ? `0${value}` : value;
}
