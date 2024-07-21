const getInitialState = () => ({
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
});

export const saveState = (state) => {
  window.localStorage.setItem('profileState', state);
};

export const getState = () => {
  const state = window.localStorage.getItem('profileState') ?? getInitialState();
  return state;
};