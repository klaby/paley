import { tinycolor } from '@ctrl/tinycolor'

import { TTypeColor } from './types'

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

/**
 * @function getColorPerType
 *
 * Gets the color in the specified format.
 *
 * @param {string} color
 * @param {TTypeColor} type
 */
const getColorPerType = (color: string, type: TTypeColor): string => {
  switch (type) {
    case 'hex':
      return tinycolor(color).toHexString()
    case 'hsl':
      return tinycolor(color).toHslString()
    case 'rgb':
      return tinycolor(color).toRgbString()
    default:
      return color
  }
}

export default { getHsl, makeHslScheme, getColorPerType, tinycolor }
