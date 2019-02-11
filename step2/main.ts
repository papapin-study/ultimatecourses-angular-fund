function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function(item){
    this.groceries = this.groceries.concat([item]);
}

ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter( (gros) => { return item !== gros } );
}

let mylist = new ShoppingList();

mylist.addItem('Banana');
mylist.addItem('Apple');

console.log(mylist.groceries);

mylist.removeItem("Banana");

console.log(mylist.groceries);