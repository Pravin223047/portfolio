//MENU-BTN SCRIPT
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('active');
});

//BLACK-WHITE SCRIPT
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle("fa-sun");
    if(themeToggler.classList.contains("fa-sun")){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}

let progress =  document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
