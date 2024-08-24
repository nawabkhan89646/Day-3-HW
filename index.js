function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  
  function average(arr) {
    return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  
  
  function max(arr) {
    return Math.max(...arr);
  }
  

  function min(arr) {
    return Math.min(...arr);
  }
  
  // Removes duplicate values from the array
  function unique(arr) {
    return [...new Set(arr)];
  }
  
  // Clears all elements from the array (returns an empty array)
  function clear() {
    return [];
  }
  
  // Splits the array into chunks of a specified size
  function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  // Flattens a nested array into a single array
  function flatten(arr) {
    return arr.reduce((flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
  }
  
  // Returns an array of elements that are in the first array but not in the second
  function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
  }
  
  // Returns an array of elements that are common to both arrays
  function intersect(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
  }
  
  // Exports
  module.exports = {
    sum,
    average,
    max,
    min,
    unique,
    clear,
    chunk,
    flatten,
    difference,
    intersect
  };
  