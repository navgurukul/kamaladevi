export default (state = {
    isAuthenticated: false,
    selectedLanguage: ''
  }, action) => {
    switch (action.type) {
      case 'SELECT_LANGUAGE': 
        return Object.assign({}, state, {
          selectedLanguage: action.language
        });
      case 'LOGIN':
        return Object.assign({}, state, {
          isAuthenticated: true,
        })
      default: return state
    }
  };