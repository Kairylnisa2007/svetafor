let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');  //кнопок для сложения и вычитания.
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0; 
//Это будет переменная, которую я  буду добавлять или вычитать.

updateDisplay();

counterPlusElem.addEventListener("click",()=>{ // мне нужна будет добавить ПРОСЛУШИТЕЛИ чтобыя могла определять, что происходит, когда я нажимаю кнопка добавления или вычитания
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
