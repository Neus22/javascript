const paqueteViaje = [
    {nombre: `Francia`,
     dia: `Lunes`,
     refrigerio: `Incluido`,
     precio: 200 },

     {nombre: `España`,
     dia: `Lunes`,
     refrigerio: `Incluido`,
     precio: 300 },

     {nombre: `Canada`,
     dia: `Martes`,
     refrigerio: `No incluido`,
     precio: 150 },

     {nombre: `Argentina`,
     dia: `Martes`,
     refrigerio: `No incluido`,
     precio: 100 },

     {nombre: `Estados Unidos`,
     dia: `Miercoles`,
     refrigerio: `No incluido`,
     precio: 120 },

     {nombre: `Japon`,
     dia: `Miercoles`,
     refrigerio: `incluido`,
     precio: 800 },

     {nombre: `Qatar`,
     dia: `Vienres`,
     refrigerio: `incluido`,
     precio: 500 },

     {nombre: `Noruega`,
     dia: `Jueves`,
     refrigerio: `incluido`,
     precio: 400 },

     {nombre: `Finlandia`,
     dia: `Sabado`,
     refrigerio: `incluido`,
     precio: 500 },

     {nombre: `Australia`,
     dia: `lunes`,
     refrigerio: `incluido`,
     precio: 1000 },
];
let carrito = []
let nombreCliente = '';
let precio = 0

function saludar(nombres) {
	alert('Bienvenido a Airport  ' + nombres);
}
let viaje = paqueteViaje.map((producto) => producto.nombre);

nombreCliente = prompt("Digite su nombre")

saludar(nombreCliente)

let compra = prompt("desea comprar un paquete de vuelo")

while (compra != "si" && compra != "no"){
    alert("por favor ingresa si o no")
    compra = prompt( "desea comprar un paquete de vuelo ");
}

if (compra ==`si`){
    alert(`acontinuacion la lista de productos disponibles`)
        
    alert(viaje)
    
}else if ( compra == "no"){
        alert("Gracias por su visita")
}

while (compra != "no"){  
  let producto = prompt ("agrega el nombre de tu destino")  

  if (producto == "francia" || producto == "españa" || producto == "canada"
  || producto == "argentina" || producto == "estados unidos" || producto == "japon"
  || producto == "qatar" || producto == "noruega" || producto == "finlandia" || producto == "australia"){
    switch (producto) {
      case "francia":
        precio = 200;
        break;
      case "españa":
        precio = 300;
        break;
      case "canada":
        precio = 150;
        break;
      case "argentina":
        precio = 100;
        break;
      case "estados Unidos":
        precio = 120;
        break;
      case "japon":
        precio = 800;
        break;
      case "qatar":
        precio = 500;
        break;
      case "noruega":
        precio = 400;
        break;
      case "filandia":
        precio = 500;
        break;
      case "australia":
        precio = 1000;
        break;
      default:
        break;
    }
  let cantidad = parseInt(prompt("cuantos paquetes de viaje desea comprar"))

  carrito.push({producto, cantidad, precio})
  console.log (carrito)
  } else {
    alert("no tenemos ese producto")
  }
  seleccion = prompt ("Desea seguir comprando viajes?")

  while( seleccion === "no"){
    alert("gracias por visitarnos, Feliz Dia!")
    carrito.forEach((carritoFinal) => {
      alert (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.cantidad},
      total a pagar  ${carritoFinal.cantidad * carritoFinal.precio}`)
      })
  break;
  }
}