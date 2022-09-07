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

let option = 0;
do {
  option = parseInt(
    prompt(
      "Ingrese 1 para agregar,3 para ver un usuario, 5 para ver filtrados, 6 para salir"
    )
  );
  switch (option) {
    case 1:
     cotizador(personas);
      break;
    case 3:
     verTodosLosClientes(personas);
      break;
    case 5:
     verClientesFiltrados(personas)
      break;
    default:
      break;
  }
} while (option != 6);


function cotizador(personas){ 
    let nombre = prompt('Ingrese su nombra')
    let monto = parseInt(prompt('ingrese el monto solicitado'))
    let plazo = parseInt(prompt('Ingrese la cantidad de coutas, 12 . 24 . 48 .72'))

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
      let newPersona = new Clientes(nombre,monto,plazo,valorCuotas,total ) 
     personas.push(newPersona);
     
    
        let validacion= prompt('Desea realizar la operacion? SI/NO');
    if(validacion.toUpperCase() == 'SI' || validacion.toUpperCase() == 'NO'){
        alert('su operacion se realizo con exito.')
        
    }else{
        alert('muchas gracias Felicitaciones')
    }   
   
}
function verTodosLosClientes(personas){
    console.log(personas)
}

function verClientesFiltrados(personas)
{
    const newArray = personas.filter(item => item.monto > 20000 );
    console.log(newArray)
}
