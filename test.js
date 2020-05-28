const initialState = { counter: 0 }

const reducer1 =
  (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return { counter: state.counter + 1 }
      default:
        return state
    }
  }

const reducer2 =
  (state, action) => {
    switch (action) {
      case 'DECREMENT':
        return { counter: state.counter - 1 }
      default:
        return state
    }
  }

const mergeReducers = require('./')

const mainReducer = mergeReducers(reducer1, reducer2)

const incrementedState = mainReducer(initialState, 'INCREMENT')
const decrementedState = mainReducer(initialState, 'DECREMENT')

const assert = require('assert').strict

assert.deepStrictEqual(
  incrementedState,
  { counter: 1 },
  "counter didn't increase"
)

assert.deepStrictEqual(
  decrementedState,
  { counter: -1 },
  "counter didn't decrease"
)
