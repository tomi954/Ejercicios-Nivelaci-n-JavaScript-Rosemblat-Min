function Hola()
{
let nombre = prompt ("cual es tu nombre");
console.log ("Hola " + nombre);
}
function MatematicaBasica()
{
    let Numero1 = parseFloat(prompt ("cual es tu primer num"));
    let Numero2 = parseFloat(prompt ("cual es tu segundo num"));

    
    let eleccion = prompt("¿Que operacion queres hacer?");

    if (eleccion == "suma")
    {
        Suma(Numero1,Numero2);
    }
    else if (eleccion == "resta")
    {
        Resta(Numero1, Numero2);
    }
    else if (eleccion == "division")
    {
        Division(Numero1, Numero2);
    }
    else if (eleccion == "multiplicacion")
    {
        Multiplicacion(Numero1, Numero2);
    }
    else
    {
        MatematicaBasica();
    }
}
function Suma(Numero1, Numero2)
{
    
    let numfinal = Numero1 + Numero2;
    console.log("La suma es:" + numfinal ) 
}
function Resta(Numero1, Numero2)
{
    
    let numfinal = Numero1 - Numero2;
    console.log("La resta es:" + numfinal ) 
}
function Division(Numero1, Numero2)
{
    
    let numfinal = Numero1 / Numero2;
    console.log("La division es:" + numfinal ) 
}
function Multiplicacion(Numero1, Numero2)
{
    
    let numfinal = Numero1 * Numero2;
    console.log("La multiplicacion es:" + numfinal ) 
}
function Par0Impar(){
    let numeroElegido = parseFloat (prompt("Cual es tu numero a revisar"));
    if (numeroElegido%2==0)
    {
        alert("El numero es par")
    }
    else{
        alert("El numero es impar")
    }
}
function ContarLetras()
{
    let palabra = prompt ("dime una palabra");
    console.log("Tu palabra tiene " + palabra.length + " letras")
}
function Repetir()
{
    let frase = prompt ("dime una frase");
    let num = parseFloat(prompt ("dice un numero"));

    for(let i = 0; i < num; i++)
    {
        console.log(frase);
    }
}
function Tablas()
{
    let numero = parseFloat(prompt ("Menciona el numero el cual quieras saber su tabla"));
    for(let i=1;i<11;i++)
    {
        console.log(numero*i);
    }
}
function NumeroRandom()
{
    let numRandom = Math.floor(Math.random()*10 + 1);
    var respuesta = prompt ("Adivina adivinador, que numero soy");
    while(respuesta!=numRandom)
    {
    if (respuesta<numRandom)
    {
        console.log("Tu numero es menor");
    }
    else if (respuesta>numRandom)
    {
        console.log("tu numero supero las expectativas");
    }
    respuesta = prompt ("Adivina devuelta, te equivocaste");
    }
    if (respuesta==numRandom)
    {
        console.log ("te felicito, muy bien, ahora a trabajar");
    }
}
function ContarVocales()
{
    let palabra = prompt ("dime una palabra");
    var num = 0;

    for(let i = 0; i < palabra.length; i++)
    {
        if (palabra[i]=="a"||palabra[i]== "e"|| palabra[i]=="i"|| palabra[i]=="o"||palabra[i]== "u")
        {
            num++;
        }
    }
    console.log(num)
    
}
function Invertir()
{
    let arbalap="";
    let palabra = prompt ("dime una palabra");
    for(let i=palabra.length-1;i >= 0;i--)
    {
        arbalap+=palabra[i];
    }
    console.log(arbalap);
}
function Palindromo()
{
    let arbalap="";
    let palabra = prompt ("dime una palabra");
    for(let i=palabra.length-1;i >= 0;i--)
    {
        arbalap+=palabra[i];
    }
    if (arbalap==palabra)
    {
        console.log("Tu palabra es un palindromo")
    }
    else
    {
        console.log ("Tu palabra no es un palindromo")
    }
}