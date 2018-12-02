import Polyglot from 'node-polyglot';

const en = require('./lang/en.json');
const fr = require('./lang/fr.json');

const polyglot = new Polyglot();
// English is the default locale, hence if not french it's surely english
export const init = lc => {
  if (lc === 'fr') polyglot.extend(fr);
  else polyglot.extend(en);
};

export const getPhrases = () => polyglot.phrases;

export const translate = key => polyglot.phrases[key];

export default polyglot;
