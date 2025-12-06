const searchBox = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

search.addEventListener("input", function () {
    suggestions.innerHTML = `
    <li> Result for "${searchBox.value}" </li>
    <li> Result for "${searchBox.value}" </li>
    `
})


let p1 = document.getElementById('plus1');
let m1 = document.getElementById('minus1');
let q1 = document.getElementById('qty1');
let t1 = document.getElementById('price1');

let qnt1 = 1;
let price1 = 200.42;

p1.addEventListener('click', function () {
    qnt1++;
    q1.textContent = qnt1;
    t1.textContent = "₹" + (price1 * qnt1).toFixed(2);
});

m1.addEventListener('click', function () {
    if (qnt1 > 1) {
        qnt1--;
        q1.textContent = qnt1;
        t1.textContent = "₹" + (price1 * qnt1).toFixed(2);
    }
});

let p2 = document.getElementById('plus2');
let m2 = document.getElementById('minus2');
let q2 = document.getElementById('qty2');
let t2 = document.getElementById('price2');

let qnt2 = 1;
let price2 = 505.51;

p2.addEventListener('click', function () {
    qnt2++;
    q2.textContent = qnt2;
    t2.textContent = "₹" + (price2 * qnt2).toFixed(2);
});

m2.addEventListener('click', function () {
    if (qnt2 > 1) {
        qnt2--;
        q2.textContent = qnt2;
        t2.textContent = "₹" + (price2 * qnt2).toFixed(2);
    }
});

let p3 = document.getElementById('plus3');
let m3 = document.getElementById('minus3');
let q3 = document.getElementById('qty3');
let t3 = document.getElementById('price3');

let qnt3 = 1;
let price3 = 300.56;

p3.addEventListener('click', function () {
    qnt3++;
    q3.textContent = qnt3;
    t3.textContent = "₹" + (price3 * qnt3).toFixed(2);
});

m3.addEventListener('click', function () {
    if (qnt3 > 1) {
        qnt3--;
        q3.textContent = qnt3;
        t3.textContent = "₹" + (price3 * qnt3).toFixed(2);
    }
});