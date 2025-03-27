//richiamo gli elementi del dom
const countDown = document.getElementById("countdown")
const numberList = document.getElementById("numbers-list")
const form = document.getElementById("answers-form")
const btn = document.querySelector("btn-primary")
const istructions = document.getElementById("instructions");

//andiamo a creare il countdown
let time = 10;

const clock = setInterval(function () {
    if (time > 0) {
        countDown.innerHTML = time;//ci restituisce il countdown su schermo
        time--;
    } else {
        clearInterval(clock);
        istructions.innertext = "inserisci i numeri che hai visto in precedenza";
        form.classList.remove("d-none");
        numberList.classList.add("d-none");
        countDown.innerHTML = "tempo scaduto";
    }

}, 1000);
//andiamo a generare i 5 numeri randomici
const random = Math.floor(Math.random() * 50) + 1;
//andiamo a creare un generatore
function generateNumbers(min, max) {
    const numbers = []
    const arrayNumbers = 5

    for (let i = 0; i < arrayNumbers; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        numbers.push(random);
    }

    return numbers
}

const randomNumbers = generateNumbers(1, 50);
console.log(randomNumbers);

//creiamo una lista in cui inserire i numeri randomici
for (let i = 0; i < randomNumbers.length; i++) {
    const item = document.createElement('li');
    item.innerText = randomNumbers[i];
    numberList.appendChild(item);
}

//Aggiustiamo il form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.preventDefault();



})