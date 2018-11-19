import translate from 'utils/translate'
import languages from 'utils/lang';

// TODO: Fetch local from redux
export default (locale = languages.DEFAULT_LOCALE) => {
  const langConfig = {}
  langConfig[locale] = languages[locale];

  // Setup the fallback language if not already done
  if (locale !== 'fr') langConfig.fr = languages.fr;

  translate.init(langConfig);
  translate.setLang(locale);
  translate.setFallback(languages.DEFAULT_LOCALE);
};
