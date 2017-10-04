import test from 'tape'
import { map, filter, reduce, compose, prop } from 'nanofp'

const stars = [
  { first: 'elvis', last: 'presley', alive: false },
  { first: 'jim', last: 'morrison', alive: false },
  { first: 'bob', last: 'dylan', alive: true },
  { first: 'buddy', last: 'holly', alive: false }
]
const fullname = o => `${prop('first', o)} ${prop('last', o)}`

/* Level 3 - rockstars */
export default function() {
  const ex1 =
    'Use map to transform list of rockstar first,last name objects to objects with fullname'
  const exercise1 = _ => {
    return null
  }

  const ex2 = 'Use filter to filter list of rockstars that are still alive'
  const exercise2 = _ => {
    return null
  }

  const ex3 =
    'Use reduce and count the number of stars that are no longer living'
  const exercise3 = _ => {
    return null
  }

  const ex4 =
    'Use map, filter and reduce with compose show a concatenated string of the fullnames of each alive star'
  const exercise4 = _ => {
    return null
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.plan(4)
    assert.same(
      exercise1(),
      [
        { fullname: 'elvis presley' },
        { fullname: 'jim morrison' },
        { fullname: 'bob dylan' },
        { fullname: 'buddy holly' }
      ],
      ex1
    )

    assert.same(
      exercise2(),
      [{ first: 'bob', last: 'dylan', alive: true }],
      ex2
    )
    assert.equals(exercise3(), 3, ex3)
    assert.same(exercise4(), 'bob dylan', ex4)
  })
}
