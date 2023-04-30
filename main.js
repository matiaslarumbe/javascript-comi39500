// Array de paciente
class Paciente {
  constructor(nombre, apellido, correo, telefono, edad, peso, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.telefono = telefono;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
  }
}

const arrayPacientes = [];

//vincule el formulario:
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nombre");
  const lastname = document.getElementById("apellido");
  const email = document.getElementById("correo");
  const phone = document.getElementById("telefono");
  const age = document.getElementById("edad");
  const weight = document.getElementById("peso");
  const height = document.getElementById("altura");

  //crear un objeto que sea el paciente:

  const paciente = new Paciente(name.value, lastname.value, email.value, phone.value, age.value, weight.value, height.value);
  arrayPacientes.push(paciente);
  console.log(arrayPacientes);

  //Reseteamo el form al mandar los datos
  formulario.reset();
})

// // Array de plan
// const planBase = [
//   {
//       plan:"consulta",
//       id:"1",
//       tipo:"consulta basica",
//       precio:2700,
//       consulta:1,
//       descripcion:"basico"
//   },
//   {plan:"dieta", id:"2", tipo:"consulta y dieta", precio:2800, consulta:1, descripcion:"dieta"},
//   {plan:"antropometria", id:"3", tipo:"consulta, dieta y antropometria", precio:3000, consulta:1, descripcion:"medicion"},
//   {plan:"rutina de ejercicios", id:"4", tipo:"full", precio:3200, consulta:1, descripcion:"consulta, dieta, antropometria y rutina de gym"}
// ]

// // OR lógico para cargar local storage
// let carrito = JSON.parse(localStorage.getItem("carrito"))|| []

// const totalCarritoRender = ()=>{
//   // se encarga de calcular el total del carrito
//   const carritoTotal = document.getElementById("carritoTotal")
//   let total = carrito.reduce((acumulador, {precio, quantity})=>{
//       return acumulador + (precio*quantity)
//   }, 0)
//   carritoTotal.innerHTML=`Precio total: $ ${total}`
// }

// const agregarCarrito = (objetoCarrito)=>{
//   // agrega productos al carrito
//   carrito.push(objetoCarrito)
//   totalCarritoRender()
// }

// const renderizarCarrito = ()=>{
//   // borra el cotnenido de carrito y renderiza carrito en una lista
//   const listaCarrito = document.getElementById("listaCarrito")
//   // borramos para evitar clones viejos
//   listaCarrito.innerHTML=""
//   carrito.forEach(({plan, precio, quantity, id}) =>{
//       let elementoLista = document.createElement("li")
//       elementoLista.innerHTML=`Producto:${plan} -- P/u: ${precio} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
//       listaCarrito.appendChild(elementoLista)
//       const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
//       botonBorrar.addEventListener("click",()=>{
//           // creo un array sin el elemento a borrar y lo igualo a carrito
//           carrito = carrito.filter((elemento)=>{
//               if(elemento.id !== id){
//                   return elemento
//               }
//           })
//           let carritoString = JSON.stringify(carrito)
//           localStorage.setItem("carrito", carritoString)
//           renderizarCarrito()
//       })
//       let carritoString = JSON.stringify(carrito)
//       localStorage.setItem("carrito", carritoString)
//   })
// }

// const borrarCarrito = ()=>{
//   carrito = []
//   let carritoString = JSON.stringify(carrito)
//   localStorage.setItem("carrito", carritoString)
//   renderizarCarrito()
// }

// const renderizarPlan = ()=>{
//   // renderiza productos en el DOM
//   const contenedorPlan = document.getElementById("contenedorPlan")
//   planBase.forEach(({plan, id, tipo, precio, consulta, descripcion})=>{
//       const planCard = document.createElement("div")
//       planCard.innerHTML = `
//             <div class="card" style="width: 18rem;" id="producto${id}">
//                 <div class="card-body">
//                     <h5 class="Plan">${plan}</h5>
//                     <h6>${tipo}</h6>
//                     <p class="Plan">${descripcion}</p>
//                     <span>Consulta: ${consulta}</span>
//                     <span>$ ${precio}</span>
//                     <form id="form${id}">
//                         <label for="contador${id}">Cantidad</label>
//                         <input type="number" placeholder="0" id="contador${id}">
//                         <button class="btn btn-primary" id="botonProd${id}">Agregar</button>
//                     </form>
//                 </div>
//             </div> `
//         contenedorPlan.appendChild(planCard)
//         const btn = document.getElementById(`botonProd${id}`)
//         // Funcionalidad al boton de agregar para agregar prods al carrito
//         btn.addEventListener("click",(e)=>{
//             e.preventDefault()
//             const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
//             if(contadorQuantity>0){
//                 agregarCarrito({plan, id, tipo, precio, consulta, descripcion, quantity:contadorQuantity})
//                 renderizarCarrito()
//                 const form = document.getElementById(`form${id}`)
//                 form.reset()
//             }
//         })
//     })
// }

// const finalizarCompra = ()=>{
//   // Borra el array y le da un mensaje al usuario
//   borrarCarrito()
//   let mensaje = document.getElementById("carritoTotal")
//   mensaje.innerHTML = "Muchas gracias por su compra🥳, los esperamos para la consulta👨🏻‍⚕️"

// }

// // DOM
// const compraFinal = document.getElementById("botonCompraFinal")
// compraFinal.addEventListener("click",(()=>{finalizarCompra()}))

// // Testing
// renderizarPlan()
// renderizarCarrito()

// Cotizaciones de consulta con Nutri Power

// cotización
// function cotizar(n) {
//   // Incialización
//   let agregarPerosnas = true;
//   let personas = 0;
//   let cotTotal = 0;

//   // Agregar personas
//   while (agregarPerosnas) {
//     personas++;

//     let nombre = prompt(
//       `Ingrese el nombre del paciente ${personas}:`
//     ).toLocaleUpperCase();

//     let Plan1 = Number(
//       prompt(`Ingrese el número de consulta TOTALES que consultara ${nombre}:`)
//     );
//     let precioTotalPlan1 = Plan1 * 1000; //cada consulta vale $1000 + lo que se agrege
//     console.log(`precio total por persona ${personas}: `, precioTotalPlan1); //CONTROL MUESTRA CONSOLA

//     let Plan = Number(
//       prompt(
//         `Para  ${personas} consulta:\n\n**Dieta y Consulta**\n- Ingrese 1 si SOLO desea tener Consulta - 2700 pesos \n- Ingrese 2 si SOLO desea tener Consulta y Dieta - 2800 pesos\n- Ingrese 3 si desea Consulta, Dieta y Antropometria - 3000 pesos\n- Ingrese 4 si desea Consulta, Dieta, Antropometria y Rutina de Ejercicios - 3200 pesos\n\nIngrese que opción le interesa para: ${nombre}`
//       )
//     );

//     if (Plan === 1) {
//       //Consulta
//       contPlan = 2700
//     } else if (Plan === 2) {
//       // Consulta y Dieta
//       contPlan = 2800
//     } else if (Plan === 3) {
//       // Consulta, Dieta y Antropometria
//       contPlan = 3000
//     } else if (Plan === 4) {
//       //Consulta, Dieta, Antropometria y Rutina de Ejercicios
//       contPlan = 3200
//     } else {
//       alert("Ingresaste una opción inválida");
//       Plan === 0;
//     }
//     console.log(`Precio total consulta persona ${personas}:`, contPlan); //CONTROL MUESTRA CONSOLA

//     let cotPersona = precioTotalPlan1 + contPlan;
//     console.log(`cotización por persona persona ${personas}:`, cotPersona); //CONTROL MUESTRA CONSOLA

//     cotTotal += cotPersona;
//     console.log("cotización total", cotTotal); //CONTROL MUESTRA CONSOLA

//     agregarPerosnas = confirm("Viene otro paciente en compañia ?");
//   }
//   cotTotal = cotTotal + n; //suma valor de la consulta
//   console.log("cotización total con valor de consulta", cotTotal); //CONTROL MUESTRA CONSOLA
//   alert(
//     `DESGLOCE COTIZACIÓN:\nLa cotización total para ${personas} paciente es: ${cotTotal} pesos`
//   );
// }

// // Inicio de Programa
// alert("Hola bienvenido a Nutri Power");
// let inicio = prompt(
//   "Ingrese las primeras 2 letras del Plan al que le interesa acceder:\n\n- Consulta\n- Antropometria\n- Rutina de ejercicios\n- Plan baja ya!\n- Dienta Variada"
// );
// let consultaLowerCase = inicio.toLocaleLowerCase();
// if (consultaLowerCase === "co") {
//   alert(
//     "Bienvenido a a la Consulta\n\nEsta consulta te llevará a:\n- Bajar de Peso\n- Aumentar peso\n- Peso Equilibrado"
//   );
//   let precioPorAntropometria = 0; // esto solo es como para que cada paciente cueste diferente
//   cotizar(precioPorAntropometria);
// } else if (consultaLowerCase === "an") {
//   alert(
//     "Bienvenido a la Antropometria\n\nEn esta parte mediciones haremos:\n- Medición Completa\n-Charla Informativa\n- Concluciones"
//   );
//   let precioPorRutina = 0; // Precios de Antropometria
//   cotizar(precioPorRutina);
// } else if (consultaLowerCase === "ru") {
//   alert(
//     "Bienvenido a Rutinas de Ejercicios\n\nEsta parte te armaremos tu rutina para:\n- Cuerpo Completo\n-Ejercicios ABc en casa \n-Rutina de Gimnasio"
//   );
//   let precioPorBajeYa = 0; // esto solo es como para que cada paciente elija su rutita
//   cotizar(precioPorBajeYa);
// } else if (consultaLowerCase === "pl") {
//   alert(
//     "Bienvenido a Dieta Baje Ya!\n\nEsta dieta bajara progresivamente en:\n- 5 kg\n- 10 kg\n- 20 kg"
//   );
//   let precioPorFuerza = 0; // esto solo para que eliga su dieta
//   cotizar(precioPorFuerza);
// } else if (consultaLowerCase === "fu") {
//   alert(
//     "Bienvenido a Dieta Fuerza y Volumen\n\nEsta dieta aumentaras progresivamente:\n- 5 kg\n- 10 kg\n- 15 kg"
//   );
//   let precioPorConsulta = 0; // esto solo es como para que cada continente cueste diferente
//   cotizar(precioPorConsulta);
// } else {
//   alert("Lo siento, no agregaste una opción válida!");
// }

// //  Se agrego function para hecer un descuento del 30%

//  alert("¿Deseas un descuento por recomendar nuestros servicios?")
//  let descuento = prompt(" -Ingrese SI ✅ si te gustaria un descuento con nosotros\n\n -Ingresa NO ❌ y tu precio queda final")

// let descuentoLowerCase = descuento.toLocaleLowerCase()
// if(descuentoLowerCase === "si"){
//      alert("Felicitaciones!!!!!! 🎈✨🎉🎊😎 \n\nTe has llevado un 30% 💵 por recomendar 👦👩. Precio final queda en $2590")
//      function Porcentaje(cotTotal, porcentaje){
//         return (cotTotal / 100 * porcentaje) - (cotTotal);
//      }
//         //console.log(Porcentaje(3700, 30));
//         // aplicacion de descuento
//      let ValorPorcentaje = Porcentaje(3700,30);
//      console.log(`Se aplica 30% de descuento por recomendar ${ValorPorcentaje} .`);

// }else if(descuentoLowerCase === "no"){
//     alert("Tu precio final es de 💵 $3700. Gracias por elegirnos!")
// }

// // Se agrego una Funcion Objeto
// alert("Juan Perez 👨🏻‍⚕️ nuestro profesional de NutriPower se comunicara con usted para su Pre consulta y quitarles todas sus dudas que tenga.")
// const profesional = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 38,
//     profesion: "nutricionista en deporte",

//   };
//   console.log(profesional);

//             // NO SE APLICA TEXTO EN EL HTML
// //   document.getElementById("demo").innerHTML =
// //   profesional.nombre + " es " + profesional.profesion + " y coordinador de NutriPower en estos dias se comunicara con usted para hacer la Pre consulta via Tel 📱 o Zoom 🖥 gracias por elegirnos. ";

// // Agrege el Arrays
//   const beneficos = ["Bajar de Peso", "Aumentar Masa Muscular", "Aprender Alimentarse", "Medición a tu cuerpo con Antropometria"];
//   console.log(beneficos);

//   beneficos.push("Descuentos por Recomendar");
//   console.log(beneficos);
//         //   NO SE APLICA TEXTO EN EL HTML
// // document.getElementById("demo2").innerHTML = text
// // alert("Te contamos en la Pagina Web una pequeña descripción de los Beneficion con NutriPower }💪🏻")

// // agrege funcion de orden superior
// class Paciente{
//   constructor (nombre,servicios,consultas,plan,precio){
//       this.nombre= nombre;
//       this.servicios= servicios;
//       this.consultas= consultas;
//       this.plan= plan;
//       this.precio= precio;
//   }
// }

// const juan = new Paciente ("Juan", "consulta", 1, "consulta", 2700);
// const karina =new Paciente ("Karina", "consulta", 1, "dieta", 2800);
// const gaston =new Paciente ("Gaston", "consulta", 1, "antropometria", 3000);
// const gime =new Paciente ("Gime", "consulta", 1, "rutina", 3200);

// const arrayPaciente= [juan, karina, gaston, gime];
// console.log ("registro de consultas: ")
// console.log (arrayPaciente);

// //forEach

// arrayPaciente.forEach((paciente1)=>{

//   console.log(paciente1);
// })

// arrayPaciente.forEach(paciente => console.log (paciente.precio));
