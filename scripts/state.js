const getInitialState = () => ({
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
});

export const saveState = (state) => {
  window.localStorage.setItem('profileState', JSON.stringify(state));
};

export const clearState = () => {
  saveState(getInitialState());
};

export const getState = () => {
  const state = JSON.parse(window.localStorage.getItem('profileState')) ?? getInitialState();
  return state;
};