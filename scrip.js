document. getElementById("btn_menu"). addEventListener("click", mostrar_menu);

document. getElementById("back__menu"). addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back__menu")

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = "-210px";
    background_menu.style.display = "none";
}