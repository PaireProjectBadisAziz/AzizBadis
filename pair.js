var cart = [];

function addToCart(name, reference, Storage, price) {
    var phone = {
        name: name,
        reference:reference,
        Storage:Storage,
        price: price
    };
    cart.push(phone);
    updateCartDisplay();
}