// Traer botón por id
document.getElementById('button-equals').addEventListener('click', () => {
    alert('Clic en igual');
});


// Otra forma de traer botón por id
document.querySelector('#button-divide').addEventListener('click', () => {
    alert('Clic en división');
});


// Traer todos los botones
const allBtn = document.querySelectorAll('.calc-button');
const logEle = document.getElementById("log")
const resultEle = document.querySelector('body > div > input[type=number]')
const logArr = [];
let aux = '';

const sumar = (a,b) => a + b
const restar = (a,b) => a-b
const multiplicar = (a,b) => a*b
const dividir = (a,b) => a/b

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (event) => {
        const element = event.target; // Elemento .calc-button que dispara el evento
    
        console.log(`Clic en ${element.textContent}`);

        if(element.textContent == 'C'){
            logEle.innerText = ""
            logArr = [];
            aux = ''
            resultEle.value = 0
        }else if(element.textContent == '='){
            logArr.push(aux)
            aux = ''

            let total = 0;
            for(let i= 1; i< logArr.length; i+=2){
               // const a = parseInt(logArr[i])
                const op = logArr[i]
                const b = parseInt(logArr[i + 1])

                if(op == '+'){
                    total = sumar(total, b)
                }else if(op == '-'){
                    total = restar(total, b)
                }
                else if(op == '×'){
                    total = multiplicar(total, b)
                }
                else if(op == '÷'){
                    total = dividir(total, b)
                }

            }

            console.log(total)
            if(isNaN(total)){
                resultEle.value = "ERROR"
            }else{
                resultEle.value = total
            }

            logArr.length = 0;
            aux = ''
            
        }else{
            logEle.innerText = logEle.innerText + element.textContent;
            logArr.push(element.textContent)
            if(isNaN(element.textContent) && element.textContent != '-'){
                logArr.push(aux)
                logArr.push(element.textContent)
                aux = ''
            }else{
                aux+= element.textContent
            }
        }

        
    });
}