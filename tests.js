
module("checkout kata");

test("0 items added should return 0", function() {
   var checkout = new Checkout();
   checkout.add("");
    equals(0, checkout.total);
});

test("Adding A should return 50", function() {
   var checkout = new Checkout();
   checkout.add("A");
    equals(50, checkout.total);
});

test("Adding B should return 30", function() {
   var checkout = new Checkout();
   checkout.add("B");
    equals(30, checkout.total);
});

test("Adding AB should return 80", function() {
   var checkout = new Checkout();
   checkout.add("A");
   checkout.add("B");
    equals(80, checkout.total);
});

test("Adding CDBA should return 115", function() {
   var checkout = new Checkout();
   checkout.add("C");
   checkout.add("D");
   checkout.add("B");
   checkout.add("A");
    equals(115, checkout.total);
});

var Checkout = function() {
    this.total = 0;
    this.prices = {
        "":0,
        "A":50,
        "B":30,
        "C":20,
        "D":15
    }
    }

Checkout.prototype = {
    add: function(item) {
        
        this.total += this.prices[item];
    }
}