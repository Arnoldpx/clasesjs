function cotizador(monto, plazo){
    valor_cuotas = monto / plazo;
    let interes;

    if(plazo==12){
        interes  =monto * 0.60 / plazo
    }else if(plazo==24){
        interes = monto * 0.80 / plazo
    }else if(plazo == 48){
        interes = monto * 0.100 /plazo
    }else if (plazo == 72){
        interes = monto * 0.120 /plazo 
    }else{
        console.log("el plazo no es correcto")
    }

    console.log('monto a solicitar es',monto);
    console.log('La cantidad de coutas en devolver es de', plazo);
    console.log('su couta pura es', valor_cuotas.toFixed(2) );
    console.log('el total de intereses es ' , valor_cuotas + interes.toFixed(2));
    let validacion= prompt('Desea realizar la operacion? SI/NO');
    if(validacion.toUpperCase() == 'SI' || validacion.toUpperCase() == 'NO'){
        alert('su operacion se realizo con exito.')
    }else{
        alert('muchas gracias Felicitaciones')
    }
}
cotizador (
    parseInt(prompt('ingrese el monto solicitado')),
    parseInt(prompt('Ingrese la cantidad de coutas, 12 . 24 . 48 .72'))
)