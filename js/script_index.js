let cart = [];
let totalPrice = 0;
console.log("Funciona o no?");

// localStorage.clear('cart');
// localStorage.clear('price');

cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cart.length == 0) {
    document.querySelector('#totalItemsInCart').textContent = "Su carrito está vacío.";
} else {
    document.querySelector('#totalItemsInCart').textContent = `Su carrito contiene ${cart.length} libros.`;
};

const cards = document.querySelectorAll('.card');

console.log('Hola');
console.log(cards[0].querySelector('p:last-of-type').textContent);
console.log(cards[0].querySelector('p:last-of-type>span.price').textContent);

cards.forEach(card => {
    // console.log(`La tarjeta contiene ${card.querySelector('h3').textContent}`);
    const button = card.querySelector('button');
    const bookTitle = card.querySelector('h3').textContent;
    const bookPrice = card.querySelector('p:last-of-type>span.price').textContent;


    button.addEventListener('click', () => {
        const book = {
            title: bookTitle,
            price: bookPrice,
            qtty: 1
        };

        cart.push(book);
        totalPrice += parseFloat(book.price);
    
        // console.log(`Productos: ${JSON.stringify(cart)}`);

        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice);

        document.querySelector('#totalItemsInCart').textContent = `Su carrito contiene ${cart.length} libros.`;
    });

});







