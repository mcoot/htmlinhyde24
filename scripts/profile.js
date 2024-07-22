import { saveState, getState } from './state.js';

const genAge = (state) => {
    switch (state.font) {
        case 'ComicSans':
            return 'boomer';
        case 'Jokerman':
            return 'boomer filling out a church newsletter';
        case 'TimesNewRoman':
            return 'old enough to have used Office \'97-\'03';
        case 'Impact':
            return 'Millenial and still posting icanhazcheezburger memes';
        default:
            return 'unknown';
    }
};

const genLocation = (state) => {
    return state.dataUse ? 
    `33°52'32.2"S 151°12'42.3"E` : 
    'Somewhere in the vicinity of Hyde park, Sydney';
}

const genLifespan = (state) => {
    return '85 years';
};

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

const genAboutMe = (state) => {
    let morality = 'I have no moral compass and am a sociopath';
    if (state.moralDilemma === 'kant') {
        morality = 'My moral code is that things i do are cool and everyone else sucks';
    }
    if (state.moralDilemma === 'locke') {
        morality = 'I used to care about malaria nets and stuff but i got too online and now im in jail for massive fraud.'
    }
    if (state.moralDilemma === 'centrist') {
        morality = 'My morals are whatever is going to make people not yell at me';
    }

    let chickenSalt = 'I am a filthy chicken salt centrist';
    if (state.chickenSalt === 'yes') {
        chickenSalt = 'Yum yum, chicken salt for me.';
    }
    if (state.chickenSalt === 'no') {
        chickenSalt = 'I dislike chicken salt. Say what you will.'
    }

    return `
    <p>I'm a lover of culture by which I mean I definitely know who ${state.poet} is.</p>
    <p>${morality}</p>
    <p>${chickenSalt}</p>
    `;
};

const writeQuizResultToPage = (state) => {
    const nameFields = document.querySelectorAll('.profileElemName');
    nameFields.forEach((e) => {
        e.textContent = state.name;
        e.style.setProperty('color', state.color);
    });
    const profileImage = document.querySelector('#profileImage');
    profileImage.src = state.clipart;

    document.querySelector('#profileAge').textContent = genAge(state);
    document.querySelector('#profileLocation').textContent = genLocation(state);
    document.querySelector('#profileLifespan').textContent = genLifespan(state);


    const status = document.querySelector('#profileStatus');
    status.innerHTML = `<${state.htmlTag}>${status.innerHTML}<${state.htmlTag}/>`;

    const profileFriendsList = document.querySelector('#profileFriendsList');
    genFriendsList(state.killFriend).forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        profileFriendsList.appendChild(li);
    });

    const profileAboutMe = document.querySelector('#profileAboutMe');
    profileAboutMe.innerHTML = genAboutMe(state);
    
};

import { commonInit } from './common.js';
window.addEventListener('load', () => {
    commonInit();
    const state = getState();
    writeQuizResultToPage(state);
}, false);