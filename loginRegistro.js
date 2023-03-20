


class cliente{
    constructor(usuarioAutorizado, edad, dni, mail, contraseñaAutorizada){
        this.usuarioAutorizado = usuarioAutorizado,
        this.edad = edad,
        this.dni = dni,
        this.mail = mail,
        this.contraseñaAutorizada = contraseñaAutorizada
    }
}

const clientes = []

const btnLogin = document.getElementById("btnLogin")
const registrado = document.getElementById("registrado")

btnLogin.addEventListener("click", () =>{
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if(usuario === UsuarioAutorizado && contraseña === contraseñaAutorizada){
        swal.fire(`Hola ${usuario}`)
        window.location.href = "index.html"
        registrado.innerText = `Hola ${usuario}`
    }

    else{
        swal.fire({
            title: "Usuario o contrasela incorrecta",
            icon: "error"
        })
    }

})


const btnRegistro= document.getElementById("btnRegistro")
const contRegistro = document.getElementById("contRegistro")

btnRegistro.addEventListener("click", ()=>{
    contRegistro.innerHTML = "";
    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML =`
    <form id="formulario"> 
    <fieldset>
        <div class="formRegistro">
            <div >
                <div>
                    <label for="Usuario">Usuario</label>
                    <br>
                    <input class="inputRegistro" type="text" name="" id="usuarioAutorizado" placeholder="Usuario"> 
                    <br><br>
                </div>

            </div>

            <div>
                
                <div>
                    <input type="radio" name="sexo" id="hombre">
                    <label  class="check" for="">Hombre</label>
                    <input type="radio" name="sexo" id="mujer">
                    <label class="check" for="">Mujer</label>
                    <input type="radio" name="sexo" id="nobi">
                    <label class="check" for="">No binario</label>

                </div>
                <input type="radio" name="sexo" id="prefiero">
                <label class="check" for="">Prefiero no decirlo</label>
                
            </div>
            <div>
            <label for="Edad">Edad</label>
            <br>
            <input class="inputEdad" type="number" name="" id="edad" placeholder="Edad"> 
            <br><br>
            </div>
        </div>
        
        <div >
        <div>
            <div >
                <label for="email">Mail</label>
                <br>
                <input class="inputRegistro"  type="email" name="" id="email" placeholder="Email">
                <br><br>
                <input class="" id="check" type="checkbox">
                <label for="">Quiro recibir las mejore promo y novedades</label>
            </div> 

            
        </div>

            <div>
                <label for="password">Contraseña</label>
                <br>
                <input class="inputRegistro"  type="password" name="" id="contraseñaAutorizada" placeholder="Ingrese su contraseña">
            </div>
            <button id="FinalizarRegistro" >Registrar</button> 
        </div>
        

    </fieldset>
</form>`

contRegistro.appendChild(nuevoDiv)

})

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", ()=>{
    const usuarioAutorizado = document.getElementById("usuarioAutorizado").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const contraseñaAutorizada = document.getElementById("contraseñaAutorizada").value;

    const nuevoCliente = new cliente(usuarioAutorizado, edad, email, contraseñaAutorizada)

    clientes.push(nuevoCliente)

    console.log(clientes)

    swal.fire("aaa")

})