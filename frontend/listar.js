let corpoTabela = document.getElementById('corpo-tabela');

async function buscarUsuarios () {
  let resposta = await fetch('http://localhost:3000/usuarios');
  let usuarios = await resposta.json();

  for (let usuario of usuarios) {
    let tr = document.createElement('tr');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdSenha = document.createElement('td');
    let tdAcoes = document.createElement('td');

    tdNome.innerText = usuario.nome;
    tdEmail.innerText = usuario.email;
    tdSenha.innerText = usuario.senha;
    tdAcoes.innerHTML = `
<<<<<<< HEAD
      <a href="cadastrousuarios.html?id=${usuario.id}">Editar</a>
=======
      <a href="grudusuarios.html?id=${usuario.id}">Editar</a>
>>>>>>> 212a8817458883c3fe5e7452a36d372abe9ed65c
      <button onclick="excluir(${usuario.id})">Excluir</button>
    `;

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdSenha);
    tr.appendChild(tdAcoes);

    corpoTabela.appendChild(tr);
  }
}

async function excluir (id) {
  await fetch('http://localhost:3000/usuarios/' + id);

  window.location.reload();
}

buscarUsuarios();
