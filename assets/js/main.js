const menu = document.querySelector('#menu');
const nav1 = document.querySelector('.navbar');

const navigate =()=>{
    if (menu.classList.contains('fa-bars')){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
        nav1.style.top = "0";
    } else{
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
        nav1.style.top = "-100%";
    }
}

menu.onclick = () =>{
    navigate();
}