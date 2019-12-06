function sortSequence(sequence) {
  if (sequence[sequence.length - 1] == 0) {sequence.pop()};
  let seq = sequence.join(",").split(",0,");
  //for each subarray, split, convert to numbers, sort on numbers
  seq = seq.map( (s, i, arr) => [s.split(',').map(t => parseInt(t)).sort( (a, b) => a - b ),i]);
  seq.sort( (el1, el2) => {
    let diff = el1[0].reduce( (a,b) => a + b ) - el2[0].reduce( (a,b) => a + b );
    if (diff != 0) {
      return diff;
    } else {
      return el1[el1.length - 1] - el2[el2.length - 1];
    }
  });
  return seq.reduce( (arr, s) => {
    return arr.concat(s[0], [0]);
  },[])
}

var assert = require('assert');
assert.deepEqual(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]),
[1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0])

assert.deepEqual(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]),
[1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0])

assert.deepEqual(sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]),
[2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0])
