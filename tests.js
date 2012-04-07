
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

var Checkout = function() {
    this.total = 0;
    }

Checkout.prototype = {
    add: function(item) {
        if (item === "A"){
            this.total = 50;
        }
    }
}