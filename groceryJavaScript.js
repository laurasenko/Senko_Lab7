
//Set up variable with grocery items that have name, price, & quantity variables.
var grocery = [
  { name: "apples",
    price: 2,
    quantity: 3},
  { name: "oranges",
    price: 2,
    quantity: 3},
  { name: "strawberries",
    price: 3,
    quantity: 3},
  { name: "pineapple",
    price: 4,
    quantity: 1},
  { name: "nutella",
    price: 5,
    quantity: 2}];

//initialized variables for item, price, quantity, & 2 bill calculations
var itemName;
var itemPrice;
var itemQuantity;
var totalBillWithTax = 0;
var totalBillNoTax = 0;
//for loop counts indexes in array
// stores values into item variables
// prints list items
//multiplies item prices by their quantities and adds items together for total bill
for (i = 0; i < grocery.length; i++) {
  totalBillNoTax += grocery[i].price * grocery[i].quantity;
  itemName = grocery[i].name;
  itemPrice = grocery[i].price;
  itemQuantity = grocery[i].quantity;
console.log( "Item: " + itemName + "  Price: " + itemPrice + "  Quantity: " + itemQuantity);}
//prints bill w/o tax and converts to 2 decimal points
console.log ("Total bill without tax = $" + totalBillNoTax.toFixed(2));

//calculates tax
function calcTax(subtotal) {
  return subtotal * 0.06;
}
//calls tax function, adds to total bill
totalBillWithTax = calcTax(totalBillNoTax) + totalBillNoTax;
//prints total w/ tax and converts to 2 decimal points
console.log ("Total bill with tax = $" + totalBillWithTax.toFixed(2));
