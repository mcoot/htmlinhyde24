import { saveState, getState } from './state.js';

const genFriendsList = (killFriend) => {
    const firstNames = [
        'Max',
        'Jim',
        'Tom',
        'Freidrich',
        'John',
        'Johnny',
        'Big Tim',
        'Kingo'
    ];
    const lastNames = [
        'J',
        'B',
        '2',
        '(the other one)',
        'S',
        ''
    ];
    firstNames.sort((a, b) => Math.random());
    lastNames.sort((a, b) => Math.random());

    const names = firstNames.slice(0, 4).map((fn, i) => `${fn} ${lastNames[i]}`);

    return [...names, killFriend];
};

const writeQuizResultToPage = (state) => {
    const nameFields = document.querySelectorAll('.profileElemName');
    nameFields.forEach((e) => {
        e.textContent = state.name;
        e.style.setProperty('color', state.color);
    });
    const profileImage = document.querySelector('#profileImage');
    profileImage.src = state.clipart;
    const status = document.querySelector('#profileStatus');
    status.innerHTML = `<${state.htmlTag}>${status.innerHTML}<${state.htmlTag}/>`;

    const profileFriendsList = document.querySelector('#profileFriendsList');
    genFriendsList(state.killFriend).forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        profileFriendsList.appendChild(li);
    });
    
};

import { commonInit } from './common.js';
window.addEventListener('load', () => {
    commonInit();
    const state = getState();
    writeQuizResultToPage(state);
}, false);