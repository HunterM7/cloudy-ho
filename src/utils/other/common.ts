export function toFixed(num: number, n?: number): number {
  return num % 1 ? +num.toFixed(n || 0) : num
}
