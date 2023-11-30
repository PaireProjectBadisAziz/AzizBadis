var cart = [];


function addToCartt(name, reference, Storage, price) {
    var phone = {
        name: name,
        reference:reference,
        Storage:Storage,
        price: price
    };
    cart.push(phone);
    updateCartDisplay();
}

 function addToCart(name, description, price) {
     var accessory = {
         name: name,
         description:description,
         price: price
     }
     cart.push(accessory)
      updateCartDisplay()
}
  $(".access").click(function(){
  $(".as").show();
  $(".prod").hide();
});
  $(".Phones").click(function(){
  $(".prod").show();
  $(".as").hide();

})

