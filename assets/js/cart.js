// Example cart items for initialization
let cart = [
    { title: "Book 1", price: 10 },
    { title: "Book 2", price: 15 },
    { title: "Book 3", price: 20 },
];
let totalPrice = 0;

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    totalPrice = 0; // Reset total price

    cart.forEach((book, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
        ${book.title} - $${book.price.toFixed(2)}
        <button id="delete" data-index="${index}">✖️</button>
    `;

        cartItemsContainer.appendChild(item);
        totalPrice += book.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from the cart array
    updateCartUI(); // Update the cart UI
}

document.getElementById('cart-items').addEventListener('click', function (event) {
    if (event.target.id === 'delete') {
        const index = parseInt(event.target.getAttribute('data-index'));
        removeFromCart(index);
    }
});

function toggleCart() {
    document.getElementById('cart-overlay').classList.toggle('show');
}

function closeCart() {
    document.getElementById('cart-overlay').classList.remove('show');
}

function checkout() {
    alert(`Proceeding to checkout with a total of $${totalPrice.toFixed(2)}`);
}

document.addEventListener('DOMContentLoaded', updateCartUI);