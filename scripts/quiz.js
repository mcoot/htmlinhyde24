import { saveState, getState } from './state.js';
import { commonInit } from './common.js';

const readQuizResult = () => {
    const result = {
        name: '',
        color: '',
        clipartChoice: '',
        fontChoice: '',
        htmlTag: '',
        killFriend: '',
        poet: '',
        moralDilemma: '',
        chickenSalt: '',
        dataUse: '',
    };

    result.name = document.querySelector('#inputQName').value;
    result.color = document.querySelector('#inputQColor').value;
    result.clipartChoice = document.querySelector('input[name="inputQClipart"]:checked').value;
    result.fontChoice = document.querySelector('input[name="inputQFont"]:checked').value;
    result.htmlTag = document.querySelector('#inputQHtmlTag').value;
    result.killFriend = document.querySelector('#inputQKillFriend').value;
    result.poet = document.querySelector('#inputQPoet').value;
    result.moralDilemma = document.querySelector('input[name="inputQMoralDilemma"]:checked').value;
    result.chickenSalt = document.querySelector('input[name="inputQChickenSalt"]:checked').value;
    result.dataUse = document.querySelector('input[name="inputQDataUse"]:checked').value;

    return result;
};

const onQuizComplete = (event) => {
    const result = readQuizResult();
    console.log(JSON.stringify(result));
    // saveState(result); 
}

window.addEventListener('load', () => {
    commonInit();

    const quizCompleteButton = document.querySelector('#quizCompleteButton');
    quizCompleteButton.addEventListener('click', onQuizComplete, false);
}, false);

