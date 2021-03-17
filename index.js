"use strict";

const form = document.querySelector('.progress-form');
const button = document.querySelector('.progress-form__button');
const progressBar = document.querySelector('.progress-bar__active');
const progressValue = document.querySelector('.progress-bar__value');

function getValue(){
    return form.number.value;
}

function setProgressValue(event){
    event.preventDefault();
    let progress = 0;
    const value = getValue();
    const interval = setInterval(setValue, 50);    
    function setValue(){
        ++progress;
        if(progress > value){
            clearInterval(interval);
            --progress;
        }
        progressBar.style.width = progress +'%'; 
        progressValue.textContent = `${progress}%`  
    }
}

form.addEventListener('submit', setProgressValue)