var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];
// console.log(groceries.length);

//Create a variable called deleteDuplicates for a function expression with list as a parameter.
var deleteDuplicates = function (list) {
  var cleanList = [];
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);

newGroceries.forEach(function (item, number) {
  console.log(`${number + 1} - ${item}`);
});
