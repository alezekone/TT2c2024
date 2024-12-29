/*************************************************************************************/
/*** Visualización del contenido del carrito en una tabla en la página "Carrito". ****/
/*************************************************************************************/
let cart = [];
let totalPrice = 0;

cart = JSON.parse(localStorage.getItem('cart')) || [];

let cartContainer = document.querySelector('#cartContainer');

console.log("Funciona o no?");
if (cart.length == 0) {
    cartContainer.innerHTML = '<p>Su carrito está vacío.</p>'
} else {

    const table = document.createElement('table');
    // table.classList.add('table');

    let tableCaption = '';
    let tableGroups = '';
    let tableHeader = '';
    let tableBody = '';
    let tableFoot = '';



    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
    tableCaption = '<caption>Resumen de su compra</caption>';

    tableGroups = '<colgroup>';
    tableGroups += '<col>';
    tableGroups += '<col>';
    tableGroups += '<col span="3">';
    tableGroups += '<col>';
    tableGroups += '</colgroup>';

    tableHeader =  '<thead>';
    tableHeader += '<tr>';
    tableHeader += '<th scope="col">Título</th>';
    tableHeader += '<th scope="col">Precio</th>';
    // tableHeader += '<th scope="col">-</th>';
    tableHeader += '<th colspan="3">Cantidad</th>';
    // tableHeader += '<th scope="col">+</th>';
    tableHeader += '<th scope="col">Total</th>';
    tableHeader += '</tr>';
    tableHeader += '</thead>';

    tableBody = '<tbody>';
    cart.forEach(book => {
        console.log(`${book.title}`);
        tableBody += '<tr>';
        tableBody += `<th scope="row">${book.title}</th>`;
        tableBody += `<td>${book.price}</td>`;
        tableBody += '<td>-</td>';
        tableBody += `<td>${book.qtty}</td>`;
        tableBody += '<td>+</td>';
        tableBody += `<td>${book.price*book.qtty}</td>`;
        tableBody += '</tr>';
        totalPrice += book.price*book.qtty;
    });
    tableBody += '</tbody>';

    tableFoot =  '<tfoot>';
    tableFoot +=  '<tr>';
    tableFoot +=  '<th scope="row" colspan="5">Importe total</th>';
    tableFoot +=  `<td>${totalPrice}</td>`;
    tableFoot +=  '</tfoot>';


    
    // cartContainer.innerHTML += '<table>';

    table.innerHTML = tableCaption + tableGroups + tableHeader + tableBody + tableFoot;
    
    console.log(table);
    
    cartContainer.appendChild(table);

};
