import { map, toPairs, fromPairs, reverse, compose, prop } from 'ramda'
import cssColorNames from 'css-color-names/css-color-names.json'


export default function(hex) {
  return compose(prop(hex), fromPairs, map(reverse), toPairs)(cssColorNames)
}
