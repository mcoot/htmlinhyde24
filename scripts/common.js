import { saveState, getState } from './state.js';

// const setCurrentTab = (tabName) => {
//   const tabs = document.querySelectorAll('div.main-view-tab');
//   for (const tab of tabs) {
//     if (tab.matches(`#${tabName}`)) {
//       tab.style.display = 'block';
//     } else {
//       tab.style.display = 'none';
//     }
//   }
// };

const commonInit = () => {
  console.log('Initialising!');
  const state = getState();
  // setCurrentTab(state.currentTab);
  // const faveColorSelector = document.querySelector('#input-color-fave-color');
  // faveColorSelector.addEventListener('change', onFaveColorSet, false)
};