
class ShoppingList2 {

    groceries: string[];

    constructor() {
        this.groceries = []
    }    

    addItem(item) {

        this.groceries = [...this.groceries, item ];

    }

    removeItem(item) {
        this.groceries = this.groceries.filter( (gros) => item !== gros );
    }

}

const myNewList = new ShoppingList2();
myNewList.addItem('Banana');
myNewList.addItem('Pizza');

console.log(myNewList.groceries);

myNewList.removeItem('Pizza');

console.log(myNewList.groceries);
