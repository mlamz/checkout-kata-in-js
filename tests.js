
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

test("Adding AAAAA should return 230", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
    equals(checkout.total(), 230);
});

test("Adding AAAAAA should return 260", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
    equals(checkout.total(), 260);
});

test("Adding AAAB should return 160", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("B");
    equals(checkout.total(), 160);
});

test("Adding AAABB should return 175", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("B");
   checkout.add("B");
    equals(checkout.total(), 175);
});

test("Adding AAABBD should return 190", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("A");
   checkout.add("A");
   checkout.add("B");
   checkout.add("B");
   checkout.add("D");
    equals(checkout.total(), 190);
});

test("Adding DABABA should return 190", function() {
   var checkout = new Checkout();
   checkout.add("D");
   checkout.add("A");
   checkout.add("B");
   checkout.add("A");
   checkout.add("B");
   checkout.add("A");
    equals(checkout.total(), 190);
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
        var discountAFilter, numberOfADiscounts, totalDiscount, discountBFilter, numberOfBDiscounts;
        
        totalDiscount = 0;
        
        discountAFilter = this.items.filter(function(itemValue) { return itemValue === "A";});
        numberOfADiscounts = Math.floor(discountAFilter.length / 3);
        
        totalDiscount += (-20 * numberOfADiscounts);
        
        discountBFilter = this.items.filter(function(itemValue) { return itemValue === "B";});
        numberOfBDiscounts = Math.floor(discountBFilter.length / 2);
        
        totalDiscount += (-15 * numberOfBDiscounts);
        
        return totalDiscount;
    },
    total: function() {
        return this.totalWithoutDiscounts + this.discounts();
    }
};
