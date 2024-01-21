const texto = document.getElementById("campoTexto");

// Array de paciente
class Paciente{
    constructor(nombre, apellido, correo, telefono, edad, peso, altura){
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.telefono = telefono;
      this.edad = edad;
      this.peso = peso;
      this.altura = altura;
    }
}

const arrayPacientes= [];

//vincule el formulario:
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    // Validacion de datos requeridos
    let nombre = document.getElementById('nombre').value;
    if(nombre.length < 1) {
      // libreria de Sweetalert2 para el aviso
       Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
 
      return;
    }
    let apellido = document.getElementById('apellido').value;
    if (apellido.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    let correo = document.getElementById('correo').value;
    if (correo.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    let telefono = document.getElementById('telefono').value;
    if (telefono.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    let edad = document.getElementById('edad').value;
    if (edad.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    let peso = document.getElementById('peso').value;
    if (peso.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    let altura = document.getElementById('altura').value;
    if (altura.length < 1) {
            Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has completado datos requeridos!!'
    })
      return;
    }
    
    // this.submit();

    
    const name = document.getElementById("nombre");
    const lastname = document.getElementById("apellido");
    const email = document.getElementById("correo");
    const phone = document.getElementById("telefono");
    const age = document.getElementById("edad");
    const weight = document.getElementById("peso");
    const height = document.getElementById("altura");
    const arrayPacientes= [];
    // libreria de Sweetalert2 para el aviso
    Swal.fire(
      'Felicitaciones!',
      'Has completado todos los campos!',
      'success'
    )

      //   e.preventDefault();
      //   let nombre = form.elements.nombre.value; // elemento <form name="my">

      //   alert("nombre")
      // })
    //crear un objeto que sea el paciente:

    const paciente = new Paciente(name.value, 
    lastname.value, 
    email.value, 
    phone.value, 
    age.value, 
    weight.value, 
    height.value);
    arrayPacientes.push(paciente);
    console.log(arrayPacientes);

    //Reseteamo el form al mandar los datos
    formulario.reset();
    
  })
    // e.preventDefault();



// Array de plan
const planBase = [
  {
      plan:"consulta",
      id:"1",
      tipo:"consulta basica",
      precio:2700,
      consulta:1,
      descripcion:"basico",
  },
  {plan:"dieta", id:"2", tipo:"consulta y dieta", precio:2800, consulta:1, descripcion:"dieta"},
  {plan:"antropometria", id:"3", tipo:"consulta, dieta y antropometria", precio:3000, consulta:1, descripcion:"medicion"},
  {plan:"rutina de ejercicios", id:"4", tipo:"full", precio:3200, consulta:1, descripcion:"consulta, dieta, antropometria y rutina de gym"}
  
]




// OR lógico para cargar local storage
let carrito = JSON.parse(localStorage.getItem("carrito"))|| []

const totalCarritoRender = ()=>{
  // se encarga de calcular el total del carrito
  
  const carritoTotal = document.getElementById("carritoTotal")
  
  let total = carrito.reduce((acumulador, {precio, quantity})=>{
      return acumulador + (precio*quantity)
  }, 0)
  carritoTotal.innerHTML=`Precio total: $ ${total}`

}



const agregarCarrito = (objetoCarrito)=>{
  // agrega productos al carrito
  carrito.push(objetoCarrito)
  totalCarritoRender()
}


const renderizarCarrito = ()=>{
  // borra el contenido de carrito y renderiza carrito en una lista
  const listaCarrito = document.getElementById("listaCarrito")

  // borramos para evitar clones viejos
  listaCarrito.innerHTML=""
  carrito.forEach(({plan, precio, quantity, id, img}) =>{
      let elementoLista = document.createElement("li")
      elementoLista.innerHTML=`Producto:${plan} -- P/u:$ ${precio} -- Cant.:${quantity} <button id="eliminarCarrito${id}">❌</button>`
      listaCarrito.appendChild(elementoLista) 
      const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
      botonBorrar.addEventListener("click",()=>{
          // creo un array sin el elemento a borrar y lo igualo a carrito
          carrito = carrito.filter((elemento)=>{
              if(elemento.id !== id){
                  return elemento
              }
          })
          let carritoString = JSON.stringify(carrito)
          localStorage.setItem("carrito", carritoString)
          renderizarCarrito()
      })
      let carritoString = JSON.stringify(carrito)
      localStorage.setItem("carrito", carritoString)
  })
}

const borrarCarrito = ()=>{
  carrito = []
  let carritoString = JSON.stringify(carrito)
  localStorage.setItem("carrito", carritoString)
  renderizarCarrito()
}

const renderizarPlan = ()=>{
  // renderiza productos en el DOM
  const contenedorPlan = document.getElementById("contenedorPlan")
  planBase.forEach(({plan, id, tipo, precio, consulta, descripcion})=>{
      const planCard = document.createElement("div");
      planCard.classList.add("col-xl-3", "col-md-6", "col-xs-12")
      planCard.innerHTML = `
            <div class="card" style="width: 18rem;" id="producto${id}">
            <img src="./imagenesJS/${plan+id}.jpg" class="card-img-top" alt="${plan}">
                <div class="card-body">
                    <h5 class="Plan">${plan}</h5>
                    <h6>${tipo}</h6>
                    <p class="Plan">${descripcion}</p>
                    <span>Consulta: ${consulta}</span>
                    <span>$ ${precio}</span>
                    <form id="form${id}">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-primary" id="botonProd${id}">Agregar</button>
                    </form>
                </div>
            </div> `
        contenedorPlan.appendChild(planCard)
        const btn = document.getElementById(`botonProd${id}`)
        // Funcionalidad al boton de agregar para agregar prods al carrito
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
            if(contadorQuantity>0){
                agregarCarrito({plan, id, tipo, precio, consulta, descripcion, quantity:contadorQuantity})
                renderizarCarrito()
                const form = document.getElementById(`form${id}`)
                form.reset()
           
            }
        })
    })
}



const finalizarCompra = ()=>{
  // Verificar si el carrito está vacío
  if (carrito.length === 0) {
    // Si el carrito está vacío, muestra un mensaje de error y no finaliza la compra
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No has seleccionado ningún plan. Por favor, elige al menos un plan antes de finalizar la compra.',
    });
    return;
  }
  
  
  borrarCarrito()
  let mensaje = document.getElementById("carritoTotal")
  
  
  mensaje.innerHTML = ""
  // Se agrego confirmacion de compra y libreria de Sweetalert2 para el aviso 
  Swal.fire(
    'Felicitaciones!',
    'Has comprado tu plan en breve te llegara un email con la confirmacion de tu compra📩!',
    'success'
  )
}



// DOM
const compraFinal = document.getElementById("botonCompraFinal")
compraFinal.addEventListener("click",(()=>{finalizarCompra()}))



// Testing
renderizarPlan()
renderizarCarrito()



// Cotizacion de dolar para la consulta (API , fetch y promesas)
const cotizacionDolar = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");

setInterval(() => {
    fetch(cotizacionDolar)
    .then (response => response.json ())
    .then(({oficial, blue, })=>{
        divDolar.innerHTML= `
        <h2>Tipos de Dólar: </h2>
        <p>Dolar Oficial: $ ${oficial} pesos argentinos</p>
        <p>Dolar Blue: $ ${blue} pesos argentinos</p>`
    })
    .catch(error => console.error (error))
    
}, 3000);

