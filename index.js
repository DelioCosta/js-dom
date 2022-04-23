const btnPesquisar = document.getElementById("btnPesquisar");

const atribuirValor = (json) => {
  if (json.erro) {
    return alert("O Cep digitado está inválido");
  }

  const rua = document.getElementById("rua");
  const complemento = document.getElementById("complemento");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  rua.value = json.logradouro;
  complemento.value = json.complemento;
  bairro.value = json.bairro;
  cidade.value = json.localidade;
  estado.value = json.uf;
};

btnPesquisar.addEventListener("click", (event) => {
  event.preventDefault();

  const inputDoCep = document.getElementById("cep");
  const valorDoCep = inputDoCep.value;

  console.log(valorDoCep.length);

  if (valorDoCep.length > 7) {
    fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
      .then((response) => response.json())
      .then(atribuirValor)
      .catch(() => {
        alert("O Cep digitado está inválido");
      });
  }
});