document.querySelectorAll('.calc .digits')
    .forEach(el => el.addEventListener('click', pressedDigit));

function pressedDigit(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelectorAll('.calc .operations')
    .forEach(el => el.addEventListener('click', pressedOperation));

function pressedOperation(ev) {
    const displ = document.querySelector('.calc .displ');
    const lastCharOnDispl = displ.value[displ.value.length - 1];
    if (isNaN(parseInt(lastCharOnDispl))) {
      displ.value = displ.value.substr(0, displ.value.length - 1);    
    } 
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval')
    .addEventListener('click', evaluate);

function evaluate() {
    const displ = document.querySelector('.calc .displ');
    if (displ.value === '') {
        return;
    } 
    displ.value = eval(displ.value);
}

document.querySelector('.calc .clear')
    .addEventListener('click', clear);
    
function clear() {
    const displ = document.querySelector('.calc .displ');
    displ.value = '';
}    
   

document.querySelector('.calc .clear-resent')
    .addEventListener('click', clearResent);

function clearResent() {
    const value = document.querySelector('.calc .displ').value;
    document.querySelector('.calc .displ').value = value.substr(0, value.length - 1);
}


