const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
const cardDetailsDiv = document.getElementById('credit-card-details');
const paymentInstructionDivs = document.querySelectorAll('.payment-instructions');

function togglePaymentDetails() {
    const selectedValue = document.querySelector('input[name="payment-method"]:checked').value;

    paymentInstructionDivs.forEach(div => div.style.display = 'none');

    if (selectedValue === 'card') {
        cardDetailsDiv.style.display = 'block';
        document.getElementById('card-number').required = true;
        document.getElementById('expiry').required = true;
        document.getElementById('cvv').required = true;
    } else {
        cardDetailsDiv.style.display = 'none';
        document.getElementById('card-number').required = false;
        document.getElementById('expiry').required = false;
        document.getElementById('cvv').required = false;

        const instructionDiv = document.getElementById(selectedValue + '-details');
        if (instructionDiv) {
            instructionDiv.style.display = 'block';
        }
    }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

paymentMethodRadios.forEach(radio => {
    radio.addEventListener('change', togglePaymentDetails);
});

togglePaymentDetails();

const cartCountElement = document.getElementById('cart-count');

function updateCartCount(count) {
    cartCountElement.textContent = count;
}

let cartItemCount = 3;
updateCartCount(cartItemCount);