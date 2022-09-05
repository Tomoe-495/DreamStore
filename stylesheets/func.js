let get = localStorage.getItem("data");
Value = JSON.parse(get);
console.log(Value)

let User = document.getElementsByClassName('user-welcome')[0];

// profile pop up 
let profile = document.getElementsByClassName('profile')[0];
profile.onclick = () => {
    profile.classList.add('active');
}
// profile pop up end

//      question
let q = document.getElementsByClassName('question')[0];
let q_check = false;
q.onclick = () => {
    q_check = ! q_check;
    if(q_check){
        q.classList.add('active');
    }else{
        q.classList.remove('active');
    }
}

//      question end

//  registration
let createACC = document.getElementsByClassName('create-account')[0];
let signIn = document.getElementsByClassName('signin')[0];
let signout = document.getElementsByClassName('sign--out')[0];

let errorM =  document.getElementsByClassName('error-message')[0];

createACC.onclick = () =>{
    let userName = document.getElementsByClassName('username')[0].value;
    let userPass = document.getElementsByClassName('userpass')[0].value;

    let json = {username: userName, password: userPass, signed: false};
    json = JSON.stringify(json);
    localStorage.setItem('data', json);
    window.location.reload();
}

signIn.onclick = () => {
    let name = document.getElementsByClassName('name')[0].value;
    let pass = document.getElementsByClassName('pass')[0].value;
    if(name == Value.username){
        if(pass == Value.password){
            let json = {username: Value.username, password: Value.password, signed: true};
            json = JSON.stringify(json);
            localStorage.setItem('data', json);
            window.location.reload();
        }else if(pass != Value.password){
            errorM.innerHTML = "invalid Password";
            errorM.style.display = "block"
        }
    }else if(name != Value.username){
        errorM.innerHTML = "invalid Username";
        errorM.style.display = "block";
    }
}

signout.onclick = () => {
    Value.signed = false
    json = JSON.stringify(Value);
    localStorage.setItem('data', json);
    window.location.reload();
}

//  registration end

if(Value != null){
    if(Value.signed){
        User.innerHTML = "Hello " + Value.username + "!";
        User.style.display = "block";
        document.getElementsByClassName('acc-btns')[0].style.display = "none";
        document.getElementsByClassName('sign-out')[0].style.display = "flex";
    }else{
        User.style.display = "none";
        document.getElementsByClassName('acc-btns')[0].style.display = "flex";
        document.getElementsByClassName('sign-out')[0].style.display = "none";
    }
}


// profile login and stuff
let create = document.getElementsByClassName('create-acc')[0];
let signin = document.getElementsByClassName('acc-signin')[0];
let btnCR = document.getElementsByClassName('btn-cr')[0];
let btnSI = document.getElementsByClassName('btn-si')[0];

btnCR.onclick = () => {
    btnCR.classList.add('active');
    btnSI.classList.remove('active');
    signin.style.display = "none";
    create.style.display = "flex";
}
btnSI.onclick = () => {
    btnSI.classList.add('active');
    btnCR.classList.remove('active');
    create.style.display = "none";
    signin.style.display = "flex";
}
// profile login and stuff  end

//         section changing --- start
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

//      section changing  --- end

//          reveal content

function reveal(){
    let reveal = document.querySelectorAll('.reveal');
    
    for(let i = 0; i < reveal.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('active');
        }else{
            reveal[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

//      reveal content end