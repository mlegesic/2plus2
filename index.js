window.addEventListener('load', function () {
    let element = document.createElement('input');
    element.id = 'firstInput';
    element.type = 'text';
    document.body.appendChild(element);

    element = document.createElement('input');
    element.id = 'secondInput';
    element.type = 'text';
    document.body.appendChild(element);

    let button = document.createElement('button');
    button.innerText = 'To count!';
    button.id = 'button';
    document.body.appendChild(button);
    button.addEventListener('click', buttonHandler);
})

function buttonHandler() {
    for(let i = 3; i < 6; i++){
        if (document.body.childNodes[i].id === '') {
            document.body.removeChild(document.body.childNodes[i]);
        }
    }
    if (document.body.querySelector('#result') !== null) document.body.removeChild(document.body.lastChild);

    let theFirstInput = document.querySelector('#firstInput');
    let theSecondInput = document.querySelector('#secondInput');
    let button = document.querySelector('#button');
    let resultContainer = document.createElement('div');
    
    let firstError = document.createElement('div');
    firstError.className = 'errorMessage';
    firstError.innerText = 'It is not a number!';

    let secondError = document.createElement('div');
    secondError.className = 'errorMessage';
    secondError.innerText = 'It is not a number!';
    
    let isCountable = true;
    if (isNaN(theFirstInput.value)) {    
        document.body.insertBefore(firstError, theSecondInput);
        isCountable = false;
    }
    if (isNaN(theSecondInput.value)){
        document.body.insertBefore(secondError, button);
        isCountable = false;
    }
    if (isCountable) {
        let result = document.createElement('div');
        result.id = 'result';
        result.innerText = String(parseInt(theFirstInput.value) + parseInt(theSecondInput.value));
        document.body.appendChild(result);
        console.log(theFirstInput.value);
    }
}