let booksPerPage = 15;
let cart = [];
let totalPrice = 0;

function showBooks() {
    
    let books = [];
    let aca = document.querySelector('#libros');
    
    fetch('assets/books/books.json')
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error al intentar acceder al archivo .json de libros, status = ${res.status}`)
        } else {
            return res.json();
        }
    })
    .then(json => {
        books = json.books;
        // console.log(books);
        books.forEach(book => {
            let card = document.createElement('div');
            card.classList.add("card"); 
            card.innerHTML = `<picture>
                                <img src="assets/books/img/${book.image}" alt="Imagen del libro ${book.id}">
                              </picture>
                              <h3>${book.title}</h3>
                              <p>${book.publisher}</p>
                              <p>Año <span class="date">${book.year}</span></p>
                              <p>Precio: <span class="currency">${book.currency}</span> <span class="price">${book.price}</span></p>
                              <button>Agregar al carrito</button>`
            aca.appendChild(card);      
        });

        // Asigno funcionalidad al botón de las card recién creadas.

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // console.log(`La tarjeta contiene ${card.querySelector('h3').textContent}`);
            const button = card.querySelector('button');
            const bookTitle = card.querySelector('h3').textContent;
            const bookPublisher = card.querySelector('p:nth-of-type(1)').textContent;
            // console.log(`El publisher es ${bookPublisher}`);
            const bookPrice = card.querySelector('p:last-of-type>span.price').textContent;
            console.log(`El precio es ${bookPrice}`);       
        
            button.addEventListener('click', () => {
                const book = {
                    title: bookTitle,
                    publisher: bookPublisher,
                    price: bookPrice,
                    qtty: 1
                };
        
                cart.push(book);
                cart.forEach(book => {
                    totalPrice += parseFloat(book.price);
                })
                // console.log(`Productos: ${JSON.stringify(cart)}`);
        
                localStorage.setItem('cart', JSON.stringify(cart));
                localStorage.setItem('totalPrice', totalPrice);
        
                document.querySelector('#totalItemsInCart').textContent = `Su carrito contiene ${cart.length} libros.`;
            });
        });


    })
    .catch(error => {
        // Si el archivo no existe, en la consola se verá el mensaje:
        // Algo salió mal: Error al intentar acceder al archivo .json de libros, status = 404.
        console.error('Algo salió mal:', error.message);
    });

}

window.onload = showBooks();

// -----------------------------------------------------------------------------------



// localStorage.clear('cart');
// localStorage.clear('price');

cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cart.length == 0) {
    document.querySelector('#totalItemsInCart').textContent = "Su carrito está vacío.";
} else {
    document.querySelector('#totalItemsInCart').textContent = `Su carrito contiene ${cart.length} libros.`;
};

const cards = document.querySelectorAll('.card');

// console.log('Hola');
// console.log(cards[0].querySelector('p:last-of-type').textContent);
// console.log(cards[0].querySelector('p:last-of-type>span.price').textContent);

// cards.forEach(card => {
//     // console.log(`La tarjeta contiene ${card.querySelector('h3').textContent}`);
//     const button = card.querySelector('button');
//     const bookTitle = card.querySelector('h3').textContent;
//     const bookPrice = card.querySelector('p:last-of-type>span.price').textContent;


//     button.addEventListener('click', () => {
//         const book = {
//             title: bookTitle,
//             price: bookPrice,
//             qtty: 1
//         };

//         cart.push(book);
//         totalPrice += parseFloat(book.price);
    
//         // console.log(`Productos: ${JSON.stringify(cart)}`);

//         localStorage.setItem('cart', JSON.stringify(cart));
//         localStorage.setItem('totalPrice', totalPrice);

//         document.querySelector('#totalItemsInCart').textContent = `Su carrito contiene ${cart.length} libros.`;
//     });

// });







