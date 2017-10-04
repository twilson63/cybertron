import R from 'ramda'
import cssColorNames from 'css-color-names/css-color-names.json'

const { map, toPairs, fromPairs, reverse, compose, prop } = R

export default function(hex) {
  return compose(prop(hex), fromPairs, map(reverse), toPairs)(cssColorNames)
}
