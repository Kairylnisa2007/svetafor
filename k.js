//querySelector() Document метод querySelector()
// возвращает первый элемент ( Element ) документа,
// который соответствует указанному селектору или 
//группе селекторов. Если совпадений не найдено,
// возвращает значение null 

//Стандартный метод querySelector() позволет получить 
//ссылку на конкретный элемент в документе. 

//кнопок для сложения и вычитания.

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');  
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0; 
//Это будет переменная, которую я 
// буду добавлять или вычитать.

updateDisplay();

// мне нужна будет добавить ПРОСЛУШИТЕЛИ 
//чтобыя могла определять, что происходит,
// когда я нажимаю кнопка добавления или вычитания
counterPlusElem.addEventListener("click",()=>{ 
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
