
module("checkout kata");

test("0 items added should return 0", function() {
   var checkout = new Checkout();
   checkout.add("");
    equals(checkout.total(), 0);
});

test("Adding A should return 50", function() {
   var checkout = new Checkout();
   checkout.add("A");
    equals(checkout.total(), 50);
});

test("Adding B should return 30", function() {
   var checkout = new Checkout();
   checkout.add("B");
    equals(checkout.total(), 30);
});

test("Adding AB should return 80", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("B");
    equals(checkout.total(), 80);
});

test("Adding CDBA should return 115", function() {
   var checkout = new Checkout();
   checkout.add("C");
   checkout.add("D");
   checkout.add("B");
   checkout.add("A");
    equals(checkout.total(), 115);
});

test("Adding AA should return 100", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
    equals(checkout.total(), 100);
});

test("Adding AAA should return 130", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
    equals(checkout.total(), 130);
});

test("Adding AAAA should return 180", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
    equals(checkout.total(), 180);
});

var Checkout = function() {
    this.totalWithoutDiscounts = 0;
    this.items = [];
    this.prices = {
        "":0,
        "A":50,
        "B":30,
        "C":20,
        "D":15
    };
    };

Checkout.prototype = {
    add: function(item) {
        this.items.push(item);
        this.totalWithoutDiscounts += this.prices[item];
    },
    discounts: function() {
        var discountAFilter = this.items.filter(function(itemValue) { return itemValue === "A";});
        
        if (discountAFilter.length >= 3){
         return -20;
        }
        return 0;
    },
    total: function() {
        return this.totalWithoutDiscounts + this.discounts();
    }
};
