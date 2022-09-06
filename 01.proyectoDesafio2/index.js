
class Clientes{
    constructor(nombre,monto,plazo,valorCuotas, total){
        this.nombre = nombre;
        this.monto = monto;
        this.plazo = plazo;
        this.valorCuotas = valorCuotas;
        this.total = total; 
    }
     
}
const personas = [];

cotizador (
    prompt('Ingrese su nombra'),
    parseInt(prompt('ingrese el monto solicitado')),
    parseInt(prompt('Ingrese la cantidad de coutas, 12 . 24 . 48 .72'))
    )

function cotizador(nombre,monto,plazo){ 

    let valorCuotas = monto / plazo;
    let interes;
    let total = valorCuotas + interes;

    const tasa = [0.60 , 0.80 , 0.100 , 0.120]
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
    total=valorCuotas + interes;
    console.log('monto a solicitar es',monto);
    console.log('La cantidad de coutas en devolver es de', plazo);
    console.log('su cuota pura es', valorCuotas );
    console.log('el total de intereses es ' , valorCuotas + interes);
      newPersona = new Clientes(nombre,monto,plazo,valorCuotas,total )  
    console.log(newPersona)
     
        let validacion= prompt('Desea realizar la operacion? SI/NO');

    if(validacion.toUpperCase() == 'SI' || validacion.toUpperCase() == 'NO'){
        alert('su operacion se realizo con exito.')
        
    }else{
        alert('muchas gracias Felicitaciones')
    }   
    agrega();
}
agrega()
   function agrega(){
   personas.push(newPersona);
   console.log(personas);
   }
    
    
