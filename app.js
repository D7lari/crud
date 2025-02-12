// let body = document.querySelector("body")

// let div = document.querySelector(".divisoria")

// let div2 = document.querySelector("#divisoria2")


// let titulo1 = document.querySelector(".titulo1")

// let titulo2 = document.querySelector(".titulo2")

// titulo1.innerText = "Ei, ei olha o som"

// titulo2.innerText = "Ei, ei olha o som"


// let paragrafo  = document.querySelector("p")

// paragrafo.innerText = `
// Proibido alimento
// `


// let div = document.querySelector("div")

// div.innerHTML = `
// <ol>
//             <li>JavaScript</li>
//             <li>css</li>
//             <li>HTML</li>
//  </ol>
// `


// let titulo = document.querySelector("h1")

// titulo.innerText = "Proibido alimento"

// titulo.classList.add("tituloAzul")

// let section = document.querySelector("section")
// let button = document.querySelector("button")
// let userButton = document.querySelector("#usuario")
// let body = document.querySelector("body")
// function fecharModal(){
//     section.classList.add("sumir")
// }

// button.addEventListener("click",fecharModal)

// function gerarModalCriarUsuario(){
//     section.classList.add("sumir")
//     body.innerHTML =`
//            <form>
//             <div class="form-group">
//               <label for="exampleInputEmail1">Endereço de email</label>
//               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Senha</label>
//               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
//             </div>
//             <button type="submit" class="btn btn-primary">Enviar</button>
//           </form>
//     `
// }

// userButton.addEventListener("click",gerarModalCriarUsuario)



// let nome = document.querySelector("#teste");

// nome.innerHTML = `
// <h1>Ola mundo</h1>
// `

// let nome = document.querySelector("h1");
// nome.innerHTML = "o marcão é o brabo que vai pagar uma pizza pra todo mundo"



// let nome = document.querySelector("h1");

// nome.innerText += "O marcão é o brabo que vai pagar uma pizza pra todo mundo"


// function changeColorToRed() {
//   let classe = nome.className
//   if(classe === "teste2") {
//     nome.classList.remove(teste2)
//   } else {
//     nome.classList.add("teste2")
//   }
// }


const usuarios = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password:"teste",
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password:"teste2",
    age: 32,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password:"teste3",
    age: 28,
    isActive: true,
  },
  {
    id: 4,
    name: "Diana Ross",
    email: "diana.ross@example.com",
    password:"teste4",
    age: 30,
    isActive: true,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    password:"teste5",
    age: 35,
    isActive: false,
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    password:"teste6",
    age: 29,
    isActive: true,
  },
  {
    id: 7,
    name: "George Michael",
    email: "george.michael@example.com",
    password:"teste7",
    age: 31,
    isActive: false,
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    password:"teste8",
    age: 27,
    isActive: true,
  },
  {
    id: 9,
    name: "Ian Somerhalder",
    email: "ian.somerhalder@example.com",
    password:"teste9",
    age: 33,
    isActive: true,
  },
  {
    id: 10,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password:"123bolinha4",
    age: 26,
    isActive: false,
  },
];
  
let button = document.querySelector("button")


function validarLogin(usuarios) {
  let email = document.querySelector("#email").value 
  let senha = document.querySelector("#senha").value
  for (let index = 0; index < usuarios.length; index++) {
    if(usuarios[index].email === email && usuarios[index].
      password===senha && usuarios[index].isActive){
        window.location="dashboard.html"
      return 
    } 
  }
}


