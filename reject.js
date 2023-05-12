// Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

function reject(array, iteratorFunction) {
    var positive = array.filter(iteratorFunction);

    return array.filter(function (item) {
        return !positive.includes(item);
    });
}

var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
});

console.log(lessThanFifteen);