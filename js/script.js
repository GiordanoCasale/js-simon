//richiamo gli elementi del dom
const countDown = document.getElementById("countdown")
const numberList = document.getElementById("numbers-list")
const form = document.getElementById("answers-form")
const btn = document.querySelector("button")
const istructions = document.getElementById("instructions");
//funzione per comparare gli array
function compareArrays(answers, numbers) {

    const result = [];
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < numbers.length; i++) {
            if(answers[i]===numbers[j]){
                result.push(answers[i]);
                //andiamo ad rimuovere gli elementi trovati per evitare ripetizioni
                numbers.splice(j, 1);
            }
        }
    }
    return result;
}
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

//andiamo a creare un generatore
function generateNumbers(min, max) {
    const numbers = []

    for (let i = 0; i < 5; i++) {
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
btn.addEventListener('click', function (event) {
    event.preventDefault();

    const strongMemory = [];
    for (let i = 0; i < 5; i++) {
        strongMemory.push(document.querySelector(`input:nth-child(${i + 1})`).value)
    }

    istructions.innerHTML = "ciao"

    const result= compareArrays(strongMemory, randomNumbers)
    console.log(result)

    if(result.length === 5){
        istructions.innerHTML= "complimenti, hai indovinato tutti i numeri"
    } else if(result.length === 0){
        istructions.innerHTML= "non hai indovinato neanche un numero zi"
    }else{
        istructions.innerHTML= `hai indovinato ${result.length} su 5: ${result}`
    }




});

