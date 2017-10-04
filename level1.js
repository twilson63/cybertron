import test from 'tape'
import { map, filter, reduce, compose } from 'nanofp'

export default function() {
  /* Level 1 */
  const ex1 = 'use map to double each value and return'
  const exercise1 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]
    return [] // return answer here
  }

  const ex2 = 'use filter to only return even numbers'
  const exercise2 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return [] // return answer here
  }

  const ex3 = 'use reduce to sum the numbers'
  const exercise3 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return 0 // return answer here
  }

  const ex4 = `use compose to run the following three commands

1. map over the numbers and square each number
2. use filter keep numbers divisible by 8
3. use reduce to count the resulting numbers
`
  const exercise4 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]
    return 0
  }

  /* tests to validate exercises go here */
  test('Level 1', assert => {
    assert.plan(4)
    assert.same(exercise1(), [2, 4, 8, 16, 32, 64], ex1)
    assert.same(exercise2(), [2, 4, 6], ex2)

    assert.same(exercise3(), 21, ex3)

    assert.same(exercise4(), 4, ex4)
  })
}
