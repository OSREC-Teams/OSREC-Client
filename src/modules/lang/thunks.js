import { init } from 'utils/translate';

import changeLang from './creators';

export const createUser = lang => dispatch =>
  new Promise(resolve => {
    dispatch(changeLang(lang));
    init(lang);
    resolve();
  });

export default createUser;
