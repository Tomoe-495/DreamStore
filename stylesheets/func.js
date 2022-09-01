let homebtn = document.getElementsByClassName('home-btn')[0];
let aboutbtn = document.getElementsByClassName('about-btn')[0];
let productbtn = document.getElementsByClassName('product-btn')[0];
let themebtn = document.getElementsByClassName('theme-btn')[0];
let contactbtn = document.getElementsByClassName('contact-btn')[0];

let home = document.getElementsByClassName('home')[0];
let about = document.getElementsByClassName('about')[0];
let product = document.getElementsByClassName('products')[0];
let contact = document.getElementsByClassName('contacts')[0];

let allSectbtn = [homebtn, aboutbtn, productbtn, contactbtn];
let allSects = [home, about, product, contact];

function sectAppear(sect){
    console.log(sect);
    sect.style.display = "block";
}

for(let a of allSectbtn){
    a.onclick = () =>{
        for(let s of allSects){
            s.style.display = "none";
        }
    }
}
