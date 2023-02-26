var user = 'Sai'; 
var salutation = 'Hello, '; 
var greeting = salutation + user + '! Here are the latest Movie Reviews.'; 
var greetingEl = document.getElementById('greeting'); 

greetingEl.textContent = greeting; 


var price = 20, 
    studnentDiscount = .10, 
    studentPrice = price - (price * studnentDiscount), 
    priceEl = document.getElementById('price'), 
    studentPriceEl = document.getElementById('student-price'); 

priceEl.textContent = price.toFixed(2); 
studentPriceEl.textContent = studentPrice.toFixed(2);