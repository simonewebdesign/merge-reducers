# mergeReducers

A function that merges two or more reducers in one.

## Installation

### npm

    npm install merge-reducers --save

### yarn

    yarn add merge-reducers

## Usage

Just call the function with your reducers as arguments.

    mergeReducers(reducer1, reducer2, ...)

### Quick Example

```javascript
import mergeReducers from 'merge-reducers';

const myReducer = mergeReducers(reducer1, reducer2, reducer3);
```

### Minimal Working Example

```javascript
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

const mergeReducers = require('merge-reducers')

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
```