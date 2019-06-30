import { test } from 'tape-modern'
import { map, filter, reduce, compose } from 'ramda'

const pets = [
  {
    name: 'Nuggett',
    age: 23,
    alive: false,
    breed: 'Golden Retriever',
    type: 'dog'
  },
  {
    name: 'Thor',
    age: 2,
    alive: true,
    breed: 'German Shepherd',
    type: 'dog'
  },
  {
    name: 'Scrappy',
    age: 22,
    alive: false,
    breed: 'Beagle',
    type: 'dog'
  },
  {
    name: 'Spot',
    age: 21,
    alive: false,
    breed: 'Dachsund',
    type: 'dog'
  },
  {
    name: 'Shyloh',
    age: 24,
    alive: false,
    breed: 'Walker Coon Hound',
    type: 'dog'
  },
  {
    name: 'Piper',
    age: 1000000,
    alive: true,
    breed: 'Terrier',
    type: 'dog'
  },
  {
    name: 'Veronica',
    age: 4,
    alive: true,
    type: 'cat'
  },
  {
    name: 'Miranda',
    age: 5,
    alive: true,
    type: 'cat'
  },
  {
    name: 'Mirabelle',
    age: 10,
    alive: false,
    type: 'cat'
  },
  {
    name: 'Orange',
    age: 1,
    alive: false,
    type: 'fish'
  },
  {
    name: 'Crawdaddy',
    age: 3,
    alive: true,
    type: 'fish'
  }
]
export default function() {
  /* Level Extra - Objects */
  const ex1 = 'Use map to return a list of pet names'
  const exercise1 = () => {
    return null // return answer here
  }
  const ex2 = 'Use filter to return a list of dead fish'
  const exercise2 = () => {
    return null // return answer here
  }

  const ex3 = 'Use reduce to return the total age of all the cats'
  const exercise3 = () => {
    return null // return answer here
  }

  const ex4 =
    'Use reduce to return a string of all the dog breeds in the following format: | Dog breed || Dog Breed || Dog Breed |'
  const exercise4 = () => {
    return null // return answer here
  }

  const ex5 =
    "Return a string of the names of dogs who can legally drink in the US and whose name includes an 'S'. Try once with compose (map, filter, and reduce), and again with only reduce as an extra challenge."
  const exercise5 = () => {
    return null // return answer here
  }

  /* tests to validate exercises go here */
  test('Exercise 1', assert => {
    assert.deepequals(
      exercise1(),
      [
        'Nuggett',
        'Thor',
        'Scrappy',
        'Spot',
        'Shyloh',
        'Piper',
        'Veronica',
        'Miranda',
        'Mirabelle',
        'Orange',
        'Crawdaddy'
      ],
      ex1
    )
    assert.deepequals(
      exercise2(),
      [{ name: 'Orange', age: 1, alive: false, type: 'fish' }],
      ex2
    )
    assert.deepequals(exercise3(), 19, ex3)
    assert.deepequals(
      exercise4(),
      '| Golden Retriever | | German Shepherd | | Beagle | | Dachsund | | Walker Coon Hound | | Terrier |',
      ex4
    )
    assert.deepequals(exercise5(), 'Scrappy Spot Shyloh', ex5)
  })
}
