import R from 'ramda'
import test from 'tape'

const todos = [
  { id: 1, text: 'Wake up', completed: true },
  { id: 2, text: 'Drink coffee', completed: true },
  { id: 3, text: 'Teach express', completed: false },
  { id: 4, text: 'snore', completed: false }
]

/**
 * Level 7
 *
 * TODO: Ramda
 */

/**
 * Level 7 - Challenge 1
 *
 * append - add item to end of the array
 *
 * pluck - map through objects and transform to array of values for given property
 *
 * max - returns the biggest number in an array of nums
 *
 * add - adds two numbers together
 *
 * Challenge:
 *   Using the todos - use the append method to add a new todo to the array
 *   But use pluck, reduce, max, add and compose to create a increment id function
 *   to make sure the id is always unique. Also default completed to false, with merge
 *
 */
const challenge1 = todos => {
  const { append, pluck, max, reduce, add, compose, merge } = R

  const newTodo = { text: 'Pickup Milk' }
  const newId = compose(add(1), reduce(max, 0), pluck('id'))
  const buildTodo = merge(
    {
      completed: false,
      id: newId(todos)
    },
    newTodo
  )

  return append(buildTodo, todos)
}

/**
 * Level 7 - Challenge 2
 *
 * compose - combine functions together in one functions
 *
 * contains - returns true or false testing whether a value exists in an array or string
 *
 * split - converts a string into an array using a separator
 *
 * prop - returns the value of a property of an object
 *
 * toString - converts a value to a string
 *
 * Challenge:
 *   Using the todos - build a search function by value for a given prop.
 *   The input to test the search will be three search
 *
 *   search1 = 'text:r'
 *   search2 = 'completed:true'
 *   search3 = 'id:9'
 *
 */
const challenge2 = (todos, criteria) => {
  const { compose, split, contains, prop, filter, toString } = R
  const [key, value] = split(':', criteria)
  return filter(compose(contains(value), toString, prop(key)), todos)
}

/**
 * Level 7 - Challenge 3
 *
 * reject - opposite of filter will remove the item if the function returns true
 *
 * propEq - propEq is equivalent to (id,value) => (obj) => obj[id] === value
 *
 * Challenge:
 *   Using the todos list - remove a todo by id
 *
 *
 */
const challenge3 = (todos, id) => {
  const { reject, propEq } = R
  return reject(propEq('id', id), todos)
}

/**
 * Level 7 - Challenge 4
 *
 * reject - opposite of filter will remove the item if the function returns true
 *
 * propEq - propEq is equivalent to (id,value) => (obj) => obj[id] === value
 *
 * append - add item to list
 *
 * HINT: if the id does not equal todo.id return null
 *
 * Challenge:
 *   Using the todos list - replace a todo with a new todo by id
 *
 *
 */
const challenge4 = (todos, id, todo) => {
  const { reject, propEq, append, compose, not, equals } = R
  if (not(equals(id, todo.id))) {
    return null
  }
  return compose(append(todo), reject(propEq('id', id)))(todos)
}

export default () => {
  test('Level 7 - Challenge 1', t => {
    t.plan(2)
    const result = challenge1(todos)
    const { reduce, max, pluck } = R
    t.equals(result.length, 5)
    t.equals(reduce(max, 0, pluck('id', result)), 5)
  })

  test('Level 7 - Challenge 2', t => {
    const { length } = R
    t.plan(3)
    const results1 = challenge2(todos, 'text:r')

    t.equals(length(results1), 3)
    const results2 = challenge2(todos, 'completed:true')
    t.equals(length(results2), 2)
    const results3 = challenge2(todos, 'id:9')
    t.equals(length(results3), 0)
  })

  test('Level 7 - Challenge 3', t => {
    const { length } = R
    t.plan(2)
    t.equals(length(challenge3(todos, 1)), 3)
    t.equals(length(challenge3(todos, 5)), 4)
  })

  test('Level 7 - Challenge 4', t => {
    const { length, find, propEq } = R
    t.plan(3)
    const todoUpdate = { id: 1, text: 'Beep', completed: false }
    const results = challenge4(todos, 1, todoUpdate)
    t.equals(length(results), 4)
    t.deepEquals(find(propEq('id', 1), results), todoUpdate)
    const results2 = challenge4(todos, 3, todoUpdate)
    t.equals(results2, null)
  })
}
