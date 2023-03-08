
class funko{
    constructor (id, nombre, precio, productora, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.productora = productora;
        this.img = img;
        this.cantidad = 1;
    }
}

const wolverine = new funko (1, "Wolverine", 3000, "Marvel", "img/wolverine.jpg");
const harryPotter = new funko (2, "Harry Potter", 1500, "Harry Potter", "img/harrypotter.jpg");
const vegeta = new funko (3, "Vegeta", 2200,"Dragon ball Z", "img/vegeta.jpg");
const stich = new funko (4, "Stich", 1750, "Disney", "img/stich.jpg" );
const grogu = new funko (5, "Grogu", 1300, "Star Wars", "img/grogu.jpg");
const goku = new funko (6, "Goku", 2100,"Dragon ball Z", "img/goku.jpg");
const legolas = new funko (7, "Legolas", 2100, "El señor de lso Anillos", "img/legolas.jpg");
const capitanAmerica = new funko (8, "Capitan America", 1900, "Marvel", "img/capitanamerica.jpg");
const gandalf = new funko (9, "gandalf", 2000, "El señor de lso Anillos", "img/gandalf.jpg");
const messi = new funko (10, "Messi", 5000,"Deportes", "img/messi.webp");
const laraCroft = new funko (11, "Lara Croft", 1300, "Tom Raider", "img/laracroft.jpg");
const voldemort = new funko (12, "Voldemort", 1400, "Harry Potter",  "img/voldemort.jpg");
const minion = new funko (13, "Minion", 1250,"Universal", "img/minion.jpg");
const batman = new funko (14, "Batman", 1800, "DC", "img/batman.jpg");
const harleyQuinn = new funko (15, "Harley Quinn", 1950,"DC", "img/harleyquinn.jpg");
const vulpix = new funko (16, "vulpix", 1550, "Pokenmon", "img/vulpix.jpg");
const dragonite = new funko (17, "Dragonite", 1550, "Pokenmon", "img/dragonite.jpg");
const doctorStrange = new funko (18, "Doctor Strange", 1550, "Marvel", "img/doctor strange.jpg");
const superman = new funko (19, "Superman", 1550, "DC", "img/superman.jpg");
const cubone = new funko (20, "Cubone", 1550, "Pokenmon", "img/cubone.jpg");


const arrayFunkos = [wolverine, harryPotter, vegeta, stich, grogu, goku, legolas, capitanAmerica, gandalf, messi, laraCroft, voldemort, minion, batman, harleyQuinn, vulpix, dragonite, doctorStrange, superman, cubone];


let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

const divFunkos = document.getElementById ("divFunkos")

const mostrarTodo = () =>{
    arrayFunkos.forEach(funko =>{
        const todos = document.createElement("div")
    todos.classList.add("col-xl-3", "col-md-6", "col-sm-12");
    todos.innerHTML = `
                        <div class="ordenCard">
                            <div class="ordenInt">
                                <img src="${funko.img}" class="imgFunkos" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${funko.nombre}</h5>
                                    <p class="card-text">Precio: $${funko.precio}</p>
                                    <button id = "agregar${funko.id}" class="btnAgregar">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>`
    
    divFunkos.appendChild(todos)

     const btnAgregar = document.getElementById(`agregar${funko.id}`)
     btnAgregar.addEventListener("click", () =>{
        agregarAlCarrito(funko.id)
     })
    })
}

mostrarTodo()


const agregarAlCarrito = (id) =>{
    const encontrado = carrito.find(funko => funko.id === id)
    if(encontrado){
        encontrado.cantidad++
        mostrarCarrito()
        totalCompra()
    }
    else{
        const noEncontrado = arrayFunkos.find(funko => funko.id === id)
        carrito.push(noEncontrado)
        mostrarCarrito()
        totalCompra()

    }
    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


const divCarrito = document.getElementById ("divCarrito")

const mostrarCarrito = () =>{
    divCarrito.innerHTML = ""
    carrito.forEach(funko =>{
        const todos = document.createElement("div")
        todos.innerHTML = `
                            <div class="ordenCardCarrito">
                                <div class="ordenIntCarrito">
                                    <img src="${funko.img}" class="imgFunkosCarrito" alt="...">
                                    <h5 class="card-title">${funko.nombre}</h5>
                                    <h6 class="card-text">Precio: $${funko.precio}</h6>
                                    <div class = "masMenos">
                                        <button id = "restar${funko.id}" class="btnRestar"><i class="fa-solid fa-minus"></i></button>
                                        <p class="card-text"> ${funko.cantidad}</p>
                                        <button id = "sumar${funko.id}" class="btnSumar"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                <button id = "eliminar${funko.id}" class="btnEliminar"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            <hr>
                            `
        
        divCarrito.appendChild(todos)

        const btnEliminar = document.getElementById(`eliminar${funko.id}`)
        btnEliminar.addEventListener("click", () =>{
            eliminarDelCarrito(funko.id)
        })


        const btnRestar = document.getElementById(`restar${funko.id}`)
        btnRestar.addEventListener("click", () =>{
            restarUno(funko.id)
        })

        const btnSumar = document.getElementById(`sumar${funko.id}`)
        btnSumar.addEventListener("click", () =>{
            sumarUno(funko.id)
        })
    })
}

const eliminarDelCarrito = (id) =>{
    const eliminar = carrito.find(funko => funko.id === id)
    const indice = carrito.indexOf(eliminar)
    carrito.splice(indice, 1)
    mostrarCarrito()
    totalCompra()
    localStorage.setItem("carrito", JSON.stringify(carrito))

    
}

const restarUno = (id) =>{
    const masMenos = carrito.find(funko => funko.id === id)
    if(masMenos.cantidad > 1){
        masMenos.cantidad--
        mostrarCarrito()
        totalCompra()
        
    }
    else{
        eliminarDelCarrito(funko.id)
        mostrarCarrito()
        totalCompra()
        
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const sumarUno = (id) =>{
    const masMenos = carrito.find(funko => funko.id === id)
        masMenos.cantidad++
        mostrarCarrito()
        totalCompra()
        localStorage.setItem("carrito", JSON.stringify(carrito))
    
}

const btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito")

btnLimpiarCarrito.addEventListener("click", () =>{
    vaciarCarrito()
})

const vaciarCarrito = () =>{
    carrito = [];
    mostrarCarrito()
    totalCompra()
    localStorage.clear()
}

const total = document.getElementById ("total")




const totalCompra = () =>{
   let montoFinal = 0;
   carrito.forEach(funko =>{
       montoFinal += funko.precio * funko.cantidad
   })

   total.innerHTML = `$${montoFinal}`
}


const buscarFunko = () =>{
    contenedorBuscador.innerHTML += ""
    const busqueda = buscador.value.toLowerCase();
    for ( let cosa of arrayFunkos){
        let personaje = cosa.nombre.toLowerCase();

        if (personaje.indexOf(busqueda) !== -1){
            contenedorBuscador.innerHTML =`
            <div class="ordenCardBusqueda">
                <img src="${cosa.img}" class="imgFunkosbus" alt="...">
                <div class = "buscadoOrden">
                    <h5 class="card-title">${cosa.nombre}</h5>
                    <p class="card-text">Precio: $${cosa.precio}</p>
                </div>
            </div>
            <hr>`

            const btnAgregar = document.getElementById(`agregar${funko.id}`)
            btnAgregar.addEventListener("click", () =>{
            agregarAlCarrito(funko.id)
            })

        }

        if (buscador.innerHTML === "")
                {buscador.innerHTML = "<span>No se encontro resultado</span>"}
        

    }

    
}


buscador.addEventListener("keyup", () =>{
    buscarFunko()
    contenedorBuscador.innerHTML += ""
    
})




const filtroNombre = document.getElementById("filtroNombre")

const filtroPrecio = document.getElementById("filtroPrecio")

const filtroProductora = document.getElementById("filtroProductora")


filtroNombre.addEventListener("click", () =>{
    ordenarPorNombre()
})

filtroPrecio.addEventListener("click", () =>{
    ordenarPorPrecio()
})


filtroProductora.addEventListener("click", () =>{
    ordenarPorProductora()
})

function ordenarPorPrecio(){
    divFunkos.innerHTML= ""
    arrayFunkos.sort((a,b) => b.precio - a.precio)
    arrayFunkos.forEach(funko =>{
        const todosLosFunkos = document.createElement("div")
        todosLosFunkos.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        todosLosFunkos.innerHTML = `
                                <div class="ordenCard ordenPrecio">
                                    <div class="ordenInt">
                                        <img src="${funko.img}" class="imgFunkos" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${funko.nombre}</h5>
                                            <p class="card-text">Precio: $${funko.precio}</p>
                                            <button id = "agregar${funko.id}" class="btnAgregar">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>`

        divFunkos.appendChild(todosLosFunkos);

    //FUNCION BOTON AGREGAR
        const btnAgregar = document.getElementById(`agregar${funko.id}`)
        btnAgregar.addEventListener("click", () =>{
        agregarAlCarrito(funko.id)
        })

    })

    console.log(arrayFunkos)
}


function ordenarPorNombre(){
    divFunkos.innerHTML= ""
    arrayFunkos.sort((a,b) =>{
        if(a.nombre > b.nombre){
            return 1
        }
        if(a.nombre < b.nombre){
            return -1
        }
        return 0
        })

    arrayFunkos.forEach(funko =>{
        const todosLosFunkos = document.createElement("div")
        todosLosFunkos.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        todosLosFunkos.innerHTML = `
                                <div class="ordenCard ordenNombre">
                                    <div class="ordenInt">
                                        <img src="${funko.img}" class="imgFunkos" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${funko.nombre}</h5>
                                            <p class="card-text">Precio: $${funko.precio}</p>
                                            <button id = "agregar${funko.id}" class="btnAgregar">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>`

        divFunkos.appendChild(todosLosFunkos);

    //FUNCION BOTON AGREGAR
        const btnAgregar = document.getElementById(`agregar${funko.id}`)
        btnAgregar.addEventListener("click", () =>{
        agregarAlCarrito(funko.id)
        })

    })

    console.log(arrayFunkos)
}


function ordenarPorProductora(){
    divFunkos.innerHTML= ""
    arrayFunkos.sort((a,b) =>{
        if(a.productora > b.productora){
            return 1
        }
        if(a.productora < b.productora){
            return -1
        }
        return 0
        })

    arrayFunkos.forEach(funko =>{
        const todosLosFunkos = document.createElement("div")
        todosLosFunkos.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        todosLosFunkos.innerHTML = `
                                <div class="ordenCard ordenProductora">
                                    <div class="ordenInt">
                                        <img src="${funko.img}" class="imgFunkos" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${funko.nombre}</h5>
                                            <p class="card-text">Precio: $${funko.precio}</p>
                                            <p class="card-text">Productora: ${funko.productora}</p>
                                            <button id = "agregar${funko.id}" class="btnAgregar">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>`

        divFunkos.appendChild(todosLosFunkos);

    //FUNCION BOTON AGREGAR
        const btnAgregar = document.getElementById(`agregar${funko.id}`)
        btnAgregar.addEventListener("click", () =>{
        agregarAlCarrito(funko.id)
        })

    })

    console.log(arrayFunkos)
}