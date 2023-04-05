const hoje = new Date();
const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};
const dataFormatada = hoje.toLocaleDateString('pt-BR', options);
const horaFormatada = hoje.toLocaleString('pt-BR', {
	hour: 'numeric',
	minute: 'numeric',
});
const diaDeHoje = `${dataFormatada}, ${horaFormatada}`;
console.log(diaDeHoje); // Exemplo de saída: "Quarta-feira, 23 de março de 2023, 14:30"

let today = document.getElementById('today');
today.innerHTML = diaDeHoje;

const apiKey = '30ca3890badaa205e3bbb1d58382791a';
const cidade = 'Tavares,Paraiba,BR';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		const temperaturaAtual = Math.round(data.main.temp);

		const climate = document.getElementById('climate');
		climate.innerHTML = `Temperatura atual: ${temperaturaAtual}°C<br>
                          `;
	})
	.catch((error) => console.error(error));
