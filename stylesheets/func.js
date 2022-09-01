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

function sectAppear(btn, sect, arg,  num){
    btn.onclick = () => {
        sect.style.display = "block";
        for(let i of arg){
            i.style.display = "none";
        }
        for(let n of navitem){
            n.classList.remove('active');
        }navitem[num].classList.add('active');
    }
}

sectAppear(homebtn, home, [about, product, contact], 0)
sectAppear(aboutbtn, about, [home, product, contact], 1)
sectAppear(productbtn, product, [about, home, contact], 2)
sectAppear(contactbtn, contact, [about, product, home], 4)

        // section changing