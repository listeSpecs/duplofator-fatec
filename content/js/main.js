const validarLogin = async () => {
  const carregar = document.querySelector('#carregar');
  carregar.style.display = 'block';

  const senha = document.querySelector('#senha').value;
  const email = document.querySelector('#email').value;

  if (senha !== 'abc123') {
    carregar.style.display = 'none';
    return alert('Sinto muito, login errado');
  }

  const validacao = await fetch(`https://api-double-factor-fatec.herokuapp.com/validacao/${email}`)
  .then((resp) => resp.json())
  .then((data) => data.cod);

  localStorage.setItem('codigo', validacao);

  window.location.href = "file:///D:/listeSpecs/Fatec/Site_2factor/verificacao.html"
}

const validarCodigo = async () => {
  const codigo = localStorage.getItem('codigo');

  const valor = document.querySelector('#codigo').value

  if (codigo !== valor) {
    return alert('Infelizmente o código é inválido');
  }

  window.location.href = "file:///D:/listeSpecs/Fatec/Site_2factor/validado.html"
}