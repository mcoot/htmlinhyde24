import { saveState, getState } from './state.js';
import { commonInit } from './common.js';

const writeQuizResultToPage = (state) => {
    document.querySelector('#inputQName').value = state.name;
    document.querySelector('#inputQColor').value = state.color;
};

const getRadioButtonValue = (rbName, defaultValue) => {
    const elem = document.querySelector(`input[name="${rbName}"]:checked`);
    if (elem) {
        return elem.value;
    }
    return defaultValue;
};

const readQuizResultFromPage = () => {
    const result = {
        name: '',
        color: '',
        clipart: '',
        font: '',
        htmlTag: '',
        killFriend: '',
        poet: '',
        moralDilemma: '',
        chickenSalt: '',
        dataUse: '',
    };

    result.name = document.querySelector('#inputQName').value;
    result.color = document.querySelector('#inputQColor').value;
    result.clipart = getRadioButtonValue('inputQClipart', '');
    result.font = getRadioButtonValue('inputQFont', '');
    result.htmlTag = document.querySelector('#inputQHtmlTag').value;
    result.killFriend = document.querySelector('#inputQKillFriend').value;
    result.poet = document.querySelector('#inputQPoet').value;
    result.moralDilemma = getRadioButtonValue('inputQMoralDilemma', '');
    result.chickenSalt = getRadioButtonValue('inputQChickenSalt', '');
    result.dataUse = getRadioButtonValue('inputQDataUse', '');

    return result;
};

const onQuizComplete = (event) => {
    const result = readQuizResultFromPage();
    console.log(JSON.stringify(result));
    saveState(result); 
}

window.addEventListener('load', () => {
    commonInit();

    const state = getState();
    console.log(JSON.stringify(state));
    writeQuizResultToPage(state);

    const quizCompleteButton = document.querySelector('#quizCompleteButton');
    quizCompleteButton.addEventListener('click', onQuizComplete, false);
}, false);

