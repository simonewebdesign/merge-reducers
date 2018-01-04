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

### Example

```javascript
import mergeReducers from 'merge-reducers';

const myReducer = mergeReducers(reducer1, reducer2, reducer3);
```
