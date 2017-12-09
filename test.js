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
if (incrementedState.counter !== 1) {
  console.log('Fail: Did not increment')
  process.exitCode = 1
}

const decrementedState = mainReducer(initialState, 'DECREMENT')
if (decrementedState.counter !== -1) {
  console.log('Fail: Did not decrement')
  process.exitCode = 2
}
