var ShoppingList2 = /** @class */ (function () {
    function ShoppingList2() {
        this.groceries = [];
    }
    ShoppingList2.prototype.addItem = function (item) {
        this.groceries = this.groceries.concat([item]);
    };
    ShoppingList2.prototype.removeItem = function (item) {
        this.groceries = this.groceries.filter(function (gros) { return item !== gros; });
    };
    return ShoppingList2;
}());
var myNewList = new ShoppingList2();
myNewList.addItem('Banana');
myNewList.addItem('Pizza');
console.log(myNewList.groceries);
myNewList.removeItem('Pizza');
console.log(myNewList.groceries);
