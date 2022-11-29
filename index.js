let  nombreCliente ="";
const precioPrimera = 300;
const precioSegunda= 200;
let tipoTicket="";
let primeraClase=false;
let segundaClase=false;
let contador=0;



function saludar(nombres){
       alert("Bienvenido a Airport  "+nombres)
}
function darCambio(pagos){
       if(primeraClase=true){

       }
       let cambio=pagos-precioPrimera
}

nombreCliente=prompt(" Digite su nombre ");



function elegirtickts(tipo ) {
       
       
       tipo = parseInt(prompt(`ELIJA UNA OPCION\n tiquete N° :\n\n 1-primera clase \n 2-Segunda clase \n`));
       while (tipo !=1 && tipo !=2 ){

       }

       if(tipo==1){
              primeraClase=true;
               segundaClase=false;
               alert("eligio priera")

               contador=contador+precioPrimera
               

       }
       else if (tipo==2){
              segundaClase=true;
               primeraClase=false;
               alert("eligio segunda")
               console.log(" segunda ")
               contador=contador+precioSegunda
       }
       
   }



   saludar(nombreCliente);
   let cantidad=parseInt(prompt(" cuantos tickes desea comprar"));
   alert(`Precios :\n\n 1-primera clase; ${precioPrimera}  \n 2-Segunda clase; ${precioSegunda} \n`)
   for( let i=0; i<cantidad;i++){
       

       
       elegirtickts();


   }

   alert(`el total de sus tiquetes serian \n$ ${contador} (dolares )`)
   
   let pagoCliente=parseFloat(prompt(" con que valor desea pagar moneda dolares"));

   while(pagoCliente<contador){
       alert("el valor debe ser mayor al precio de lso tiquetes ")
       pagoCliente=parseFloat(prompt(" con que valor desea pagar moneda dolares"));

   }

   let cambio= pagoCliente-contador;

   alert(`su cambio es ${cambio} gracias por elegirAirport`)
