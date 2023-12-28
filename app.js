
function activeLightMode() {
    let lightMode = document.querySelector('html');
    lightMode.classList.toggle('light');

    let img = document.querySelector('#profile img')

    if(lightMode.classList.contains('light')) {
        img.setAttribute("src", "assets/avatar-fundo-azul.svg");
    }else{
        img.setAttribute("src", "assets/avatar-fundo-laranja.svg");
    }
}

