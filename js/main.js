var cargarPagina = function(){
    cabezalCambio();
}

function cabezalCambio() {
    var cabezal = $("#cabezal");
    //console.log(cabezal)
    if (window.scrollY > 80) {
        cabezal.removeClass("uk-navbar-transparent");        
       
    } else if (window.scrollY < 80) {
        cabezal.addClass("uk-navbar-transparent");
    }
}

document.addEventListener("scroll", cabezalCambio);

$(document).ready(cargarPagina);