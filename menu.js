/* OWN CODE STARTS HERE*/


document.addEventListener('DOMContentLoaded', () => {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Get the cart display elements
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.querySelector('.clear-cart-btn');
    
    // Initialize an empty cart object
    const cart = {};

    // Function to update the cart display on the page
    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = ''; // Clear the current cart display
        let totalPrice = 0; // Initialize total price

        // Loop through cart items and display them
        for (const [name, item] of Object.entries(cart)) {
            const cartItem = document.createElement('div'); // Create a new div for each cart item
            cartItem.innerHTML = `
                <span>${name} (x${item.quantity})</span>
                <span>£${(item.price * item.quantity).toFixed(2)}</span> 
            `;
            cartItemsContainer.appendChild(cartItem); // Add item to cart display
            totalPrice += item.price * item.quantity; // Update total price
        }

        totalPriceElement.textContent = `${totalPrice.toFixed(2)}`; // Update the total price display
    };

    // Add event listeners to 'Add to Cart' buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name; // Get item name from data attribute
            const price = parseFloat(button.dataset.price); // Get item price from data attribute

            if (cart[name]) {
                cart[name].quantity += 1; // Increase quantity if item is already in cart
            } else {
                cart[name] = { price, quantity: 1 }; // Add new item to cart
            }

            updateCartDisplay(); // Refresh the cart display
        });
    });

    // Add event listener to clear cart button
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            Object.keys(cart).forEach(item => delete cart[item]); // Remove all items from the cart
            updateCartDisplay(); // Refresh the cart display
        });
    }
});
/* OWN CODE ENSDS HERE*/
