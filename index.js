alert("ingrese un numero, devolvemos su tabla matematica.");

let numero = prompt("Ingrese el numero, por favor.");

document.write("la tabla del " + numero + " es:<br><br>" );

for (let i = 1; i <=10; i ++){
    document.write(numero + "x" + i + "=" + (numero * i) + "<br><br>")
}
