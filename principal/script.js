let d = 1;
let limite = 22; //limite de las lecciones html (es con la que la pagian inicia)

let parte1 ="../HTML/dia"; //´primera parte de la ruta
let parte2 = "_HTML.html"; //segunda parte de la ruta

function  html()
{
    parte1 = "../HTML/dia"
    parte2 = "_HTML.html"
        d++;
        limite = 22;
    retroceder();

}
function css()
{
    parte1 = "../CSS/dia"
    parte2 = "_css.html"
    d++;
    retroceder();
    limite = 31;
    
}
function javaScript()
{
    parte1 = "../JavaScript/dia"
    parte2 = "_javaScript.html"
        d++;
    retroceder();
    limite = 33;
}
function retroceder()
{
    d -= 1;
    let dir;
    if (d <= 0) {d = limite}

    if (parte1 == "../CSS/dia" && d >= 6 )
    {
        dir = "../CSS/dia" + d +"_css/dia"+ d + "_css.html"
    }
    else
    {
        dir = parte1 + d + parte2;
    }

    document.getElementById("visor").src = dir;

    document.getElementById("saltar").value = d;
}
function avanzar()
{
    d += 1;
    let dir ="";
    if (d > limite) {d = 1}

    if (parte1 == "../CSS/dia" && d >= 6)
    {
        dir = "../CSS/dia" + d +"_css/dia"+ d + "_css.html"
    }
    else
    {
        dir = parte1 + d + parte2;
    }
    document.getElementById("visor").src = dir;

    document.getElementById("saltar").value = d;
}
function saltar()
{
    d = document.getElementById("saltar").value;
    d++;
    retroceder();
}


function revisarEntrada(caja)
{
        if (parseInt(caja.value) > limite )
    {
        caja.value = limite; 
    }
    if(parseInt(caja.value) < 1)
    {
        caja.value = 1;
    }
    
    if (isNaN(parseInt(caja.value)))
    {
        caja.value = 1;
    }
}
 function seleccionarPestania(elemento)
 {
    //quitar la clase activo de todas las pestañas
    const pestanias = document.querySelectorAll('#opciones td');
    pestanias.forEach(tab => tab.classList.remove('activo'));

    //agrega la clase activo solo a la pestaña seleccionado
    elemento.classList.add('activo');
 }