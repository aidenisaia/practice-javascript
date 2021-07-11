// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

function selectEvenItems(strings) {
  var result = [];
  var i = 0;
  strings.forEach(function (string) {
    if (i % 2 === 0) {
      result.push(string);
    }
    i++;
  });
  // console.log(result);
}

// selectEvenItems(["a", "b", "c", "d", "e"]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

// function max(numbers) {
//   var currentMax = numbers[0];
// }

// Write a function that takes in an array of numbers and returns its sum.

function sum(numbers) {
  var total = 0;
  numbers.forEach(function (number) {
    total = total + number;
  });
  return total;
}

// console.log(sum([3, 5, 6, 7, 43, 7]));

// Write a function that takes in an array of strings and returns the smallest string.

function smallest(strings) {
  var current = strings[0];
  strings.forEach(function (string) {
    if (string.length < current.length) {
      current = string;
    }
  });
  return current;
}

// console.log(smallest(["tree", "apple", "pot", "tinfoil"]));

// Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverse(numbers) {
  var array = [];
  var i = numbers.length - 1;
  while (i >= 0) {
    array.push(numbers[i]);
    i--;
  }
  return array;
}

console.log(reverse([1, 2, 3, 4, 5]));
