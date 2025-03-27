//richiamo gli elementi del dom
const countDown = document.getElementById("countdown")
const numberList = document.getElementById("numbers-list")
const form = document.getElementById("answers-form")
const btn = document.querySelector("btn-primary")

//andiamo a creare il countdown









//andiamo a generare i 5 numeri randomici
const random = Math.floor(Math.random() * 50) + 1;
//andiamo a creare un generatore
function generateNumbers(min,max){
    const numbers = []
    const arrayNumbers = 5

    for(let i=0; i<arrayNumbers; i++){
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        numbers.push(random);
    }

    return numbers
}

const randomNumbers = generateNumbers(1,50);
console.log(randomNumbers);

//creiamo una lista in cui inserire i numeri randomici
for(let i = 0; i<randomNumbers.length; i++) {
    const item = document.createElement('li');
    item.innerText = randomNumbers[i];
    numberList.appendChild(item);
}