const produtosTecnologia = [
    {
        id: 1,
        nome: "Smartphone Samsung Galaxy S23",
        categoria: "Celulares",
        preco: 4999.99,
        marca: "Samsung",
        especificacoes: {
            tela: "6.1 polegadas",
            processador: "Exynos 2200",
            armazenamento: "128GB",
            camera: "50MP"
        }
    },
    {
        id: 2,
        nome: "Notebook Dell XPS 13",
        categoria: "Notebooks",
        preco: 7499.00,
        marca: "Dell",
        especificacoes: {
            tela: "13.4 polegadas",
            processador: "Intel Core i7",
            armazenamento: "512GB SSD",
            memoria: "16GB"
        }
    },
    {
        id: 3,
        nome: "Fones de Ouvido Sony WH-1000XM5",
        categoria: "Áudio",
        preco: 2299.00,
        marca: "Sony",
        especificacoes: {
            tipo: "Over-ear",
            conectividade: "Bluetooth",
            autonomia: "30 horas",
            recursos: "Cancelamento de ruído"
        }
    },
    {
        id: 4,
        nome: "Smartwatch Apple Watch Series 8",
        categoria: "Wearables",
        preco: 3899.00,
        marca: "Apple",
        especificacoes: {
            tela: "1.9 polegadas",
            sistema: "watchOS",
            conectividade: "Wi-Fi, Bluetooth",
            recursos: "Monitoramento de saúde, ECG"
        }
    },
    {
        id: 5,
        nome: "Placa de Vídeo Nvidia RTX 4080",
        categoria: "Componentes",
        preco: 13999.00,
        marca: "Nvidia",
        especificacoes: {
            memoria: "16GB GDDR6X",
            conexao: "PCIe 4.0",
            resolucao_max: "8K",
            tecnologias: "DLSS 3, Ray Tracing"
        }
    }
];

let tbody = document.querySelector("tbody")
let body = document.querySelector("body")
function renderList(produtosTecnologia) {
    for (let index = 0; index < produtosTecnologia.length; index++) {
        tbody.innerHTML += `
    <tr>
      <th scope="row">${produtosTecnologia[index].id}</th>
      <td>${produtosTecnologia[index].nome}</td>
      <td>${produtosTecnologia[index].preco}</td>
      <td>${produtosTecnologia[index].marca}</td>
    </tr>
        `
    }

}
renderList(produtosTecnologia)

function renderModal() {
    let div = document.createElement("div")
    div.classList.add("modal-overlay")
    div.innerHTML = `
        <div id="createModal" class="modal-content">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputId" aria-describedby="emailHelp" placeholder="Digite seu Id">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Digite seu nome">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputCategoria" aria-describedby="emailHelp" placeholder="Digite sua categoria">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputPreco" aria-describedby="emailHelp" placeholder="Digite seu preço">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputMarca" aria-describedby="emailHelp" placeholder="Digite sua marca">
                </div>
                    <button type="button" onclick="cadastrarProdutos()" class="btn btn-primary">Enviar</button>
                    <button type="button" onclick="removerModalCreate()" class="btn btn-primary">Remover</button>
            </form>
        </div>
`
    body.appendChild(div)
}

function removerModalCreate() {
    let modal = document.querySelector(".modal-overlay")
    body.removeChild(modal)
}

function cadastrarProdutos() {
    let id = document.querySelector("#inputId").value
    let nome = document.querySelector("#inputNome").value
    let categoria = document.querySelector("#inputCategoria").value
    let preco = document.querySelector("#inputPreco").value
    let marca = document.querySelector("#inputMarca").value

    produtosTecnologia.push({
        id:produtosTecnologia.length +1,
        nome:nome,
        categoria:categoria,
        preco:preco,
        marca:marca

    })
    tbody.innerHTML = ""
    renderList(produtosTecnologia)
    removerModalCreate()

}

function editarProdutos() {
    let id = document.querySelector("#inputId").value
    let nome = document.querySelector("#inputNome").value
    let categoria = document.querySelector("#inputCategoria").value
    let preco = document.querySelector("#inputPreco").value
    let marca = document.querySelector("#inputMarca").value

    let index = produtosTecnologia.findIndex( () => {})


    produtosTecnologia[index]({
        id:id,
        nome:nome,
        categoria:categoria,
        preco:preco,
        marca:marca
    })

}