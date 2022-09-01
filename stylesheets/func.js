let homebtn = document.getElementsByClassName('home-btn')[0];
let aboutbtn = document.getElementsByClassName('about-btn')[0];
let productbtn = document.getElementsByClassName('product-btn')[0];
let themebtn = document.getElementsByClassName('theme-btn')[0];
let contactbtn = document.getElementsByClassName('contact-btn')[0];

let navitem = document.getElementsByClassName('nav-item');

let home = document.getElementsByClassName('home')[0];
let about = document.getElementsByClassName('about')[0];
let product = document.getElementsByClassName('products')[0];
let contact = document.getElementsByClassName('contacts')[0];

let allSectbtn = [homebtn, aboutbtn, productbtn, contactbtn];
let allSects = [home, about, product, contact];

homebtn.onclick = () => {
    home.style.display = "block";
    for(let i of [about, product, contact]){
        i.style.display = "none";
    }
    for(let n of navitem){
        n.classList.remove('active');
    }navitem[0].classList.add('active');
}
aboutbtn.onclick = () => {
    about.style.display = "block";
    for(let i of [home, product, contact]){
        i.style.display = "none";
    }
    for(let n of navitem){
        n.classList.remove('active');
    }navitem[1].classList.add('active');
}
productbtn.onclick = () => {
    product.style.display = "block";
    for(let i of [about, home, contact]){
        i.style.display = "none";
    }
    for(let n of navitem){
        n.classList.remove('active');
    }navitem[2].classList.add('active');
}
contactbtn.onclick = () => {
    contact.style.display = "block";
    for(let i of [about, product, home]){
        i.style.display = "none";
    }
    for(let n of navitem){
        n.classList.remove('active');
    }navitem[4].classList.add('active');
}