// add whatever parameters you deem necessary
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
function twoArrayObject(keys, values) {
  let results = {};

  for (let i = 0; i < keys.length; i++) {
    if (values[i]) {
      results[keys[i]] = values[i];
    } else {
      results[keys[i]] = null;
    }
  }
  return results;
}

// module.exports = twoArrayObject;
