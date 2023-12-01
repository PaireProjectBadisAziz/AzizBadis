var cart = [];


function addToCart(name,price) {
    var phone = {
        name: name,
        price: price
    }
    cart.push(phone)
    updateCartDisplay()
}
function removeFromCart(index) {
  cart.splice(index, 1)// Remove item from the cart array at the specified index
  updateCartDisplay()
}


function updateCartDisplay(){
  var cartItemsElement = $('#cart-items')
  var cartTotalElement = $('#cart-total')

  cartItemsElement.empty()


  for (var index = 0; index < cart.length; index++) {
    var product = cart[index]
    var listItem = $('<li>').text(product.name + ' - $' + product.price.toFixed(2))
    var removeButton = $('<button id="buttonremove" onclick="removeFromCart('+index+')">').text('Remove')
    $('#cart-items').append(listItem)
    $('#cart-items').append(removeButton)
  }

  var total = 0
  for (var index = 0; index < cart.length; index++) {
    var product = cart[index]
    total += product.price
  }
  cartTotalElement.text(total.toFixed(2))
}
  $(".access").click(function(){
  $(".as").show()
  $(".prod").hide()
})
  $(".Phones").click(function(){
  $(".prod").show()
  $(".as").hide() 

})

