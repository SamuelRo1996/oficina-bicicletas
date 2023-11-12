const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');
let inputCpf = document.getElementById('cpf');
let inputEndereco = document.getElementById('endereco');
let inputData_nascimento = document.getElementById('data_nascimento');
let form = document.getElementById('formulario');


if (id) {
  buscarDados();
}

form.addEventListener('submit', async (event) => {
  event.stopPropagation();
  event.preventDefault();

  let nome = inputNome.value;
  let email = inputEmail.value;
  let cpf = inputCpf.value;
  let endereco = inputEndereco.value;
  let data_nascimento = inputData_nascimento.value;

  let payload = {
    nome,
    email,
    cpf,
    endereco,
    data_nascimento,
  }

  let url = 'http://localhost:3000/clientes';
  let method = 'POST';
  if (id) {
    url += '/' + id;
    method = 'PUT';
  }

  let resposta = await fetch(url, {
    method: method,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (resposta.ok) {
    window.location.href = 'index.html'
  } else {
    alert('Ops! Algo deu errado!');
  }
});
