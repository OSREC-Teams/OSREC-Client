import CHANGE_LANG from './types';

const lang = (state = 'fr', action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return action.lang;
    default:
      return state;
  }
};

export default lang;
