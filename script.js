let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartDetails = document.getElementById('cart-details');
    const checkoutButton = document.getElementById('checkout');
    
    if (cart.length === 0) {
        cartDetails.innerHTML = '<p>暂无商品</p>';
        checkoutButton.disabled = true;
    } else {
        let cartContent = '';
        let totalPrice = 0;
        cart.forEach(item => {
            cartContent += `<p>${item.name} - ¥${item.price}</p>`;
            totalPrice += item.price;
        });
        cartContent += `<p><strong>总价: ¥${totalPrice}</strong></p>`;
        cartDetails.innerHTML = cartContent;
        checkoutButton.disabled = false;
    }
}
