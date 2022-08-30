/*function Clientes(nombre ,dni, sueldo){
    this,nombre = nombre;
    this,dni = dni;
    this,sueldo = sueldo;
}
for(let i=1; i<=1 ; i++){
   let nombre = prompt("ingrese nombre:");
   let dni = prompt("ingrese Dni:");
   let sueldo  =parseInt(prompt("ingrese el monto de su sueldo:"))

if(isNaN(nombre)){
   let usuario = new Clientes(nombre , dni , sueldo)
   console.log(usuario)
}else
{
   console.log("Faltan Datos")
}
}*/

function cotizador(clientes, monto, plazo){
    valor_cuotas = monto / plazo;
    let interes;
    const tasa = [0.60 , 0.80 , 0.100 , 0.120]
    const personas = []
    personas.push(clientes,monto,plazo,valor_cuotas);
    
console.log(personas);
    if(plazo==12){
        interes  =monto * tasa[0] / plazo
    }else if(plazo==24){
        interes = monto * tasa[1] / plazo
    }else if(plazo == 48){
        interes = monto * tasa[2] /plazo
    }else if (plazo == 72){
        interes = monto * tasa[3] /plazo 
    }else{
        console.log("el plazo no es correcto")
    }
    console.log('datos del clientes', clientes);
    console.log('monto a solicitar es',monto);
    console.log('La cantidad de coutas en devolver es de', plazo);
    console.log('su cuota pura es', valor_cuotas.toFixed() );
    console.log('el total de intereses es ' , valor_cuotas + interes.toFixed());
    let validacion= prompt('Desea realizar la operacion? SI/NO');

    if(validacion.toUpperCase() == 'SI' || validacion.toUpperCase() == 'NO'){
        alert('su operacion se realizo con exito.')
    }else{
        alert('muchas gracias Felicitaciones')
    }
}
cotizador (
    prompt("ingrese su nombre"),
    parseInt(prompt('ingrese el monto solicitado')),
    parseInt(prompt('Ingrese la cantidad de coutas, 12 . 24 . 48 .72'))

    
)


    
