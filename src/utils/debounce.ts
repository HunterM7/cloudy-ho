/**
 * Debounce function
 * @param {Function} callback Any function you want to call
 * @param {number} delay The delay in ms after which your function will be called
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any[]) => any>(
  callback: F,
  delay: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }

    return new Promise((res) => {
      timeout = setTimeout(() => {
        res(callback(...args))
      }, delay)
    })
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}
