import { tinycolor } from '@ctrl/tinycolor'

/**
 * @function getHsl
 *
 * Get color from the hue.
 *
 * @param {number} hue
 */
const getHsl = (hue: number) =>
  hue >= 0 && hue <= 360 ? `hsl(${hue}, 100%, 50%)` : null

/**
 * @function makeHslScheme
 *
 * Returns an array with a color scheme in HSL format.
 *
 * @param {number} hop
 */
const makeHslScheme = (hop: number = 1): string[] =>
  Array.from({ length: hop ? 361 / hop : 361 }, (_, k) =>
    hop ? k * hop : k,
  ).map(v => getHsl(v))

export default { getHsl, makeHslScheme, tinycolor }
