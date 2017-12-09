const mergeReducers = (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, func) => (
      { ...acc, ...func(acc, action) }
    ), state);

module.exports = mergeReducers;
