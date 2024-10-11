const btnBuscar = document.querySelector('button');
const inputCidade = document.querySelector('input');
const divRes = document.querySelector('div');

btnBuscar.addEventListener('click', () => {
    const key = 'b09c18f65d1f8889e7e649d997e808f0';
    const city = String(inputCidade.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    if (inputCidade.value.length == 0) {
        alert('Digite o nome da cidade');
        return;
    }

    const weatherFunc = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('cidade não encontrada');
            const dados = await response.json();
            inputCidade.value = '';
            divRes.innerHTML = `<h1>${dados.name}</h1><p>temperatura: ${dados.main.temp}°C</p><p>umidade: ${dados.main.humidity}%</p><p>clima: ${dados.weather[0].description}</p>`;
            console.log(dados);
            
            
        } catch (erro) {
            console.error(erro);
            inputCidade.value = '';
            divRes.innerText = erro.message;
        }
    };

    weatherFunc();
});
