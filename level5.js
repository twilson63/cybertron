import test from 'tape'
import { map, filter, reduce, compose, toPairs } from 'nanofp'

import pokerHands from 'poker-hands'
/* SEE: https://www.npmjs.com/package/poker-hands

/* Level 5 -  */
export default function() {
  const ex1 =
    'Use map to iterate through each value in the deck object and add then values for each suit or item'
  const exercise1 = _ => {
    const values = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ]
    const deck = { hearts: [], clubs: [], spades: [], diamond: [] }

    return null
  }

  const ex2 = `Use filter to filter an deck of cards of cards with all the cards that are even Jack = 11, Queen = 12, King = 13, Ace = 0`
  const exercise2 = _ => {
    const data = {
      HA: 0,
      H1: 1,
      H2: 2,
      H3: 3,
      H4: 4,
      H5: 5,
      H6: 6,
      H7: 7,
      H8: 8,
      H9: 9,
      H10: 10,
      HJ: 11,
      HQ: 12,
      HK: 13,
      SA: 0,
      S1: 1,
      S2: 2,
      S3: 3,
      S4: 4,
      S5: 5,
      S6: 6,
      S7: 7,
      S8: 8,
      S9: 9,
      S10: 10,
      SJ: 11,
      SQ: 12,
      SK: 13,
      DA: 0,
      D1: 1,
      D2: 2,
      D3: 3,
      D4: 4,
      D5: 5,
      D6: 6,
      D7: 7,
      D8: 8,
      D9: 9,
      D10: 10,
      DJ: 11,
      DQ: 12,
      DK: 13,
      CA: 0,
      C1: 1,
      C2: 2,
      C3: 3,
      C4: 4,
      C5: 5,
      C6: 6,
      C7: 7,
      C8: 8,
      C9: 9,
      C10: 10,
      CJ: 11,
      CQ: 12,
      CK: 13
    }

    return null
  }

  const ex3 = `Use reduce and toPairs to calculate the sum of all the face cards Jack (11), Queen(12), King(13)

  ** You will want to convert your object to an array of pairs using the toPairs function, then
  run the reduce, in your value postion 0 will be the key and position 1 will be the value
  `

  const exercise3 = _ => {
    const data = {
      HA: 0,
      H1: 1,
      H2: 2,
      H3: 3,
      H4: 4,
      H5: 5,
      H6: 6,
      H7: 7,
      H8: 8,
      H9: 9,
      H10: 10,
      HJ: 11,
      HQ: 12,
      HK: 13,
      SA: 0,
      S1: 1,
      S2: 2,
      S3: 3,
      S4: 4,
      S5: 5,
      S6: 6,
      S7: 7,
      S8: 8,
      S9: 9,
      S10: 10,
      SJ: 11,
      SQ: 12,
      SK: 13,
      DA: 0,
      D1: 1,
      D2: 2,
      D3: 3,
      D4: 4,
      D5: 5,
      D6: 6,
      D7: 7,
      D8: 8,
      D9: 9,
      D10: 10,
      DJ: 11,
      DQ: 12,
      DK: 13,
      CA: 0,
      C1: 1,
      C2: 2,
      C3: 3,
      C4: 4,
      C5: 5,
      C6: 6,
      C7: 7,
      C8: 8,
      C9: 9,
      C10: 10,
      CJ: 11,
      CQ: 12,
      CK: 13
    }

    return null
  }

  const ex4 = `compose - shuffle cards

  Use map to create a virtual deck with the values array and suit object

  Then use a random function to get an int 1 - 4 and an int 0 - 13
  Then the times function to randomly pick 5 cards into an array
  Finally, use the reduce function to look at all five cards and
  if you can reconize a poker hand, straigh, flush, full house, four of a kind.
  Return the hand name, otherwise return nothing.

  Use Compose to tie them all together
  `
  const exercise4 = _ => {
    const values = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ]
    const deck = { hearts: [], clubs: [], spades: [], diamond: [] }

    return null
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.plan(4)
    assert.same(
      exercise1(),
      {
        clubs: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A'
        ],
        diamond: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A'
        ],
        hearts: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A'
        ],
        spades: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '7',
          '8',
          '9',
          '10',
          'J',
          'Q',
          'K',
          'A'
        ]
      },
      ex1
    )

    assert.same(
      exercise2(),
      {
        C10: 10,
        C2: 2,
        C4: 4,
        C6: 6,
        C8: 8,
        CA: 0,
        CQ: 12,
        D10: 10,
        D2: 2,
        D4: 4,
        D6: 6,
        D8: 8,
        DA: 0,
        DQ: 12,
        H10: 10,
        H2: 2,
        H4: 4,
        H6: 6,
        H8: 8,
        HA: 0,
        HQ: 12,
        S10: 10,
        S2: 2,
        S4: 4,
        S6: 6,
        S8: 8,
        SA: 0,
        SQ: 12
      },
      ex2
    )
    assert.same(exercise3(), 144, ex3)
    assert.equals(exercise4(), '', ex4)
  })
}
