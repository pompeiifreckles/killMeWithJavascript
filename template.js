// Template Literals and Template Strings

const product1 = 'Pizza',
        price = 30,
        product2 = 'Hamburger',
        price2 = 40;

// Old Method 
let html;
html = '<ul>' +
        '<li>Item: ' + product1 + '</li>' + 
        '<li>Price: ' + price + '</li>' +
        '<li>Item: ' + product2 + '</li>' +
        '<li>Price: ' + price2 + '</li>' +
        '<li>Total: ' + (price + price2) + '</li>' +
        '</ul>';

// New Method
html = '
        <ul>
            <li>Item: ${product1} </li>
            <li>Price:  ${price} </li>
            <li>Item: ${product2} </li>
            <li>Price:  ${price2} </li>
            <li>Total: ${price + price2} </li>
        </ul>
    ';

let app = document.querySelector('#app');
app.innerHTML = html;
