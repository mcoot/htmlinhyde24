const getInitialState = () => ({
    currentTab: 'landing-tab',
    currentQuestion: 0,
    profile: {
        name: '',
        clipartChoice: '',
        fontChoice: '',
    }
});

export const saveState = (state) => {
    window.localStorage.setItem('profileState', state);
};

export const getState = () => 
    window.localStorage.getItem('profileState') ?? getInitialState();