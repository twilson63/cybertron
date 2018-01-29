import R from 'ramda'
const test = window.tape

/**
 * Level 1
 *
 * Results Data
 */

const data = {
  rows: [
    {
      key: '1',
      doc: {
        _id: '1',
        type: 'movie',
        name: 'Ghostbusters',
        year: '1984'
      }
    },
    {
      key: '2',
      doc: {
        _id: '2',
        type: 'movie',
        name: 'Caddyshack',
        year: '1980'
      }
    },
    {
      key: '2',
      doc: {
        _id: '3',
        type: 'movie',
        name: 'Groundhog Day',
        year: '1993'
      }
    }
  ]
}

/**
 * Level 1 - Challenge 1
 *
 * map through the results.rows array and return a list of movie docs.
 */
const challenge1 = () => {
  return R.map(row => row.doc, data.rows)
}

/** Level 1 = Challenge 2
 *
 * map through the results.rows array and then filter all movies that were
 * filmed before 1990
 *
 */
const challenge2 = () => {
  return R.filter(
    movie => movie.year < '1990',
    R.map(row => row.doc, data.rows)
  )
}

/** level 1 - Challenge 3
 *
 * Use reduce to group movies by decade 80s, 90s etc
 *
 */
const challenge3 = () => {
  return R.reduce(
    (acc, movie) => {
      if (movie.year < '1990' && movie.year > '1979') {
        acc['80s'] = R.append(movie, acc['80s'])
      } else if (movie.year > '1989' && movie.year < '2000') {
        acc['90s'] = R.append(movie, acc['90s'])
      }
      return acc
    },
    { '90s': [], '80s': [] },
    R.map(row => row.doc, data.rows)
  )
}

/**
 * Level 1 - Challenge 4
 *
 * map over the rows and pick the movie documents
 * transform to an array of strings `[name] - [year]`
 * then transform to a set of list items - `<li>${movie}</li>`
 *
 * use the compose function to only map once.
 *
 */
const challenge4 = () => {
  return R.map(
    R.compose(
      movie => `<li>${movie}</li>`,
      movieDoc => `${movieDoc.name} - ${movieDoc.year}`,
      row => row.doc
    ),
    data.rows
  )
}

export default () => {
  test('Level 1 - Challenge 1', t => {
    t.plan(1)
    t.deepEquals(R.pluck('doc', data.rows), challenge1())
  })

  test('Level 1 - Challenge 2', t => {
    t.plan(1)
    t.deepEquals(
      R.filter(
        R.compose(R.lt(R.__, '1990'), R.prop('year')),
        R.pluck('doc', data.rows)
      ),
      challenge2()
    )
  })

  test('Level 1 - Challenge 3', t => {
    t.plan(1)
    t.deepEquals(challenge3(), {
      '90s': [{ _id: '3', type: 'movie', name: 'Groundhog Day', year: '1993' }],
      '80s': [
        { _id: '1', type: 'movie', name: 'Ghostbusters', year: '1984' },
        { _id: '2', type: 'movie', name: 'Caddyshack', year: '1980' }
      ]
    })
  })

  test('Level 1 - Challenge 4', t => {
    t.plan(1)
    t.equals(
      challenge4().join(''),
      '<li>Ghostbusters - 1984</li><li>Caddyshack - 1980</li><li>Groundhog Day - 1993</li>'
    )
  })
}
