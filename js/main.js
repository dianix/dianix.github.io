var cargarPagina = function(){
    cabezalCambio();
}

function cabezalCambio() {
    var cabezal = $("#cabezal");
    //console.log(cabezal)
    if (window.scrollY > 100) {
        cabezal.removeClass("uk-navbar-transparent");
        cabezal.addClass("barraverde");
       
    } else if (window.scrollY < 100) {
        cabezal.removeClass("barraverde");
        cabezal.addClass("uk-navbar-transparent");
    }
}

document.addEventListener("scroll", cabezalCambio);

$(document).ready(cargarPagina);