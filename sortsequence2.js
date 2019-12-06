function sortSequence(sequence) {
  return sequence.slice(0, -1)
    .join(",").split(",0,")
    .map( (sub, i) => [sub.split(',').map(n => parseInt(n)).sort( (a, b) => a - b ), i])
    .sort( (a, b) => { return a[0].reduce( (c,d) => c + d ) - b[0].reduce( (c,d) => c + d ) || a[1] - b[1]})
    .reduce( (res, sub) => res.concat(sub[0], [0]),[])
}

let tests = [ [ [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0], sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]), "sortSequence should return correct value - test 1" ],
              [ [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0], sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]), "sortSequence should return correct value - test 2"],
              [ [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0], sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]), "sortSequence should return correct value - test 3"],
              [ sortSequence([5,1,12,294,0,26,1,38,43,22,37,41,36,5,63,0,19,16,35,44,45,50,103,0,49,32,22,209,0,49,19,23,7,21,193,0,49,48,32,183,0,25,50,19,41,8,35,38,24,25,47,0,
                 13,8,14,10,10,36,33,188,0,15,34,47,216,0,48,49,6,27,27,48,9,50,48,0,32,19,50,9,42,2,158,0,10,50,8,6,238,0,49,21,2,3,17,220,0]),
                 [1,5,12,294,0,1,5,22,26,36,37,38,41,43,63,0,16,19,35,44,45,50,103,0,22,32,49,209,0,7,19,21,23,49,193,0,32,48,49,183,0,8,19,24,25,25,35,
                 38,41,47,50,0,8, 10, 10, 13, 14, 33, 36, 188, 0, 15, 34, 47, 216, 0, 6, 9, 27, 27, 48, 48, 48, 49, 50, 0, 2, 9, 19, 32, 42, 50, 158, 0, 6, 8, 10, 50, 238, 0,
                 2, 3, 17, 21, 49, 220, 0], "sortSequence should return correct value - test 4"] ];

tests.forEach( test => {
  if (!arraysEqual(test[0],test[1])) {
    console.log(test[0].join(","), "\n", test[1].join(","), "\n", test[2]);
  }
})

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
    return true;
  }
}
