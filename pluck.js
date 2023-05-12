var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    return array.map(function(item) {
      return item[property];
    });
}

var result = pluck(paints, 'color'); // returns ['red', 'blue', 'yellow'];

console.log(result);