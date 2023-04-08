const hoje = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataFormatada = hoje.toLocaleDateString("pt-BR", options);
const horaFormatada = hoje.toLocaleString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
});
const diaDeHoje = `${dataFormatada}, ${horaFormatada}`;
console.log(diaDeHoje); // Exemplo de saída: "Quarta-feira, 23 de março de 2023, 14:30"

let today = document.getElementById("today");
today.innerHTML = diaDeHoje;

const apiKey = "30ca3890badaa205e3bbb1d58382791a";
const cidade = "Tavares,Paraiba,BR";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const temperaturaAtual = Math.round(data.main.temp);

    const climate = document.getElementById("climate");
    climate.innerHTML = `${temperaturaAtual}°C<br>
                          `;
  })
  .catch((error) => console.error(error));

const form = document.querySelector("form");
const nome = document.getElementById("nome-completo");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const solicitacao = document.getElementById("solicitacao");

form.addEventListener("submit", function (event) {
  if (!validaNome(nome.value)) {
    alert("Por favor, digite um nome válido.");
    event.preventDefault();
  }

  if (!validaEmail(email.value)) {
    alert("Por favor, digite um e-mail válido.");
    event.preventDefault();
  }

  if (!validaTelefone(telefone.value)) {
    alert("Por favor, digite um número de telefone válido.");
    event.preventDefault();
  }

  if (solicitacao.value.length < 50) {
    alert("Por favor, escreva uma solicitação com pelo menos 50 caracteres.");
    event.preventDefault();
  }
});

function validaNome(nome) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(nome);
}

function validaEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function validaTelefone(telefone) {
  const regex = /^\d+$/;
  return regex.test(telefone);
}

const input = document.getElementById("solicitacao");
const charCount = document.getElementById("quantidade-caracteres");

input.addEventListener("input", () => {
  charCount.textContent = input.value.length;
});
