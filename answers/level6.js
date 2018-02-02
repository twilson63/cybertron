import R from 'ramda'
import fetch from 'isomorphic-fetch'
import test from 'tape'

/**
 * Level 6
 *
 * Ramda all the things
 */

/**
 * Level 6 - Challenge 1
 *
 * find - applies a function to each element of an array and returns the first element for which the function returns a truthy value.
 *
 * you hae a deck of cards, the cards is a property on the deck object.
 * you can inpect the shape of the cards object by doing a console.log(JSON.stringify(___, null, 2))
 *
 * Challenge:
 *   Use the find function to find the Ace of Clubs and return that card to the
 *   caller.
 *
 *   HINT: a common mapper method is obj => obj.property = 'somevalue' -
 *   this function is used so often there is a function in ramda that makes this
 *   easier to implement called propEq
 *
 *   http://ramdajs.com/docs/#propEq
 *
 *   (See if you can use propEq in this challenge)
 */
const challenge1 = deck => {
  // show card object
  // console.log(JSON.stringify(deck.cards[0], null, 2))
  const { find, propEq } = R
  return find(propEq('code', 'AC'), deck.cards)
}

/** Level 6 = Challenge 2
 *
 * Challenge:
 *   Find all of the one eyed royals and suicide king
 *   then transfrom the obects to array of card images
 *   finally just a string of images.
 *
 *
 */
const challenge2 = deck => {
  const { compose, map, filter, anyPass, propEq, join, path } = R
  const isKingHearts = propEq('code', 'KH')
  const isJackHearts = propEq('code', 'JH')
  const isKingDiamonds = propEq('code', 'KD')
  const isJackSpades = propEq('code', 'JS')
  const imgHtml = img => `<img src=${img} />`

  return compose(
    join(''),
    map(compose(imgHtml, path(['images', 'png']))),
    filter(anyPass([isKingHearts, isJackHearts, isKingDiamonds, isJackSpades]))
  )(deck.cards)
}

/** level 6 - Challenge 3
 *
 * TBD
 *
 */
const challenge3 = (deck, validate) => {
  const { reduce, append, __, ifElse, compose, contains, prop, always } = R
  const correcthand = ['3S', '3H', '3C', 'AH', 'AS'] // create your own
  const myhand = reduce(
    (a, v) =>
      ifElse(
        compose(contains(__, correcthand), prop('code')),
        append(__, a),
        always(a)
      )(v),
    [],
    deck.cards
  ) // add your code here
  validate(myhand, correcthand)
}

/**
 * Level 6 - Challenge 4
 *
 * 52 Card Pickup
 *
 * Challenge, given a deck of card use the ramda sort and prop
 * functions to put the cards in order by the code prop.
 *
 */
const challenge4 = deck => {
  const { sort, prop } = R
  return sort((card1, card2) => {
    if (prop('code', card1) < prop('code', card2)) {
      return -1
    } else {
      return 1
    }
  }, deck.cards)
}

export default () => {
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
    .then(res => res.json())
    .then(results => {
      const deck = results
      test('Level 6 - Challenge 1', t => {
        t.plan(1)
        t.deepEquals(challenge1(deck), {
          suit: 'CLUBS',
          value: 'ACE',
          images: {
            svg: 'http://deckofcardsapi.com/static/img/AC.svg',
            png: 'http://deckofcardsapi.com/static/img/AC.png'
          },
          image: 'http://deckofcardsapi.com/static/img/AC.png',
          code: 'AC'
        })
      })

      test('Level 6 - Challenge 2', t => {
        t.plan(4)
        const { contains } = R
        const results = challenge2(deck)
        console.log(JSON.stringify(results))
        t.ok(contains('img/KH', results))
        t.ok(contains(`img/KD`, results))
        t.ok(contains(`img/JH`, results))
        t.ok(contains(`img/JS`, results))
      })

      test('Level 6 - Challenge 3', t => {
        const { pluck, sort, lt } = R
        t.plan(1)
        const desc = (a, b) => (lt(a, b) ? -1 : 1)
        challenge3(deck, (actualHand, correctHand) => {
          t.deepEquals(
            sort(desc, pluck('code', actualHand)),
            sort(desc, correctHand)
          )
        })
      })

      test('Level 6 - Challenge 4', t => {
        const { pluck } = R
        t.plan(1)
        const actual = pluck('code', challenge4(deck))
        t.deepEquals(actual, [
          '0C',
          '0D',
          '0H',
          '0S',
          '2C',
          '2D',
          '2H',
          '2S',
          '3C',
          '3D',
          '3H',
          '3S',
          '4C',
          '4D',
          '4H',
          '4S',
          '5C',
          '5D',
          '5H',
          '5S',
          '6C',
          '6D',
          '6H',
          '6S',
          '7C',
          '7D',
          '7H',
          '7S',
          '8C',
          '8D',
          '8H',
          '8S',
          '9C',
          '9D',
          '9H',
          '9S',
          'AC',
          'AD',
          'AH',
          'AS',
          'JC',
          'JD',
          'JH',
          'JS',
          'KC',
          'KD',
          'KH',
          'KS',
          'QC',
          'QD',
          'QH',
          'QS'
        ])
      })
    })
}
