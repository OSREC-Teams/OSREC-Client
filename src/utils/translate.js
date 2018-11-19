/* eslint-disable no-use-before-define, no-plusplus, max-len, no-underscore-dangle */

// parse string and extract a bracket
// @param {string} text
// @param {number} pos
// eslint-disable-next-line
function _getBracketContent(text, pos) {
  let count = 0;

  for (let i = pos + 1, size = text.length; i < size; ++i) {
    if (text[i] === '{') {
      count++;
    }
    if (text[i] === '}' && --count < 0) {
      return text.substring(pos + 1, i);
    }
  }
}

// Recursively parse content
// @param {string} text
// @param {boolean?} is inside a condition
function _parseRecursiveContent(content, isCondition = false) {
  let value = '';
  let pos = 0;
  let code = content;

  do {
    pos = content.indexOf('{', pos + value.length);

    if (pos < 0) {
      break;
    }

    value = _getBracketContent(content, pos);
    if (value) {
      if (isCondition) {
        const result = _parseRecursiveContent(value);
        if (result !== value) {
          code = code.replace(value, result);
        }
      } else {
        code = _compileFragment(code, value, isCondition);
      }
    }

    pos += 2;
  } while (pos >= 0 && pos < content.length);

  return code;
}

// Compile a fragment to machine code
//
// @param {string} variable to replace
// @param {Object} object containing data for replacement
// @param {boolean?} is already compiled
//
// from : abcd {test} 123
// to   : function(params) { return "abcd " + params.test + " 123" }
//
// from : {GENDER, select, male {I am a} female {I am a} other {We are a}}
// to   : function(params) { return (params.GENDER == "male" ? "I am a" ? params.GENDER == "female" : "I am a" : "We are a"); }
//
// from : {N, plural, =0{Voyeur} =1{Voyeur} other {Voyeurs}}
// to   : function(params) { return(params.N == 0 ? "Voyeur" ? n == 1 : "Voyeur" : "Voyeurs"); }

function _compileFragment(code, token) {
  // Variable : "test {value} test".
  if (token.indexOf(',') < 0) {
    return code.replace(
      `{${token}}`,
      `" + (("${token.trim()}" in params) ? params["${token.trim()}"] : "") + "`,
    );
  }

  const reg = /=?(\w+)(\s+)?{([^}]+)?}/g;

  let data;
  // eslint-disable-next-line
  let [key, type, ...fragments] = token.replace(/\s+/g, ' ').split(',');

  key = key.trim();
  type = type.trim().toLowerCase();

  if (type !== 'select' && type !== 'plural') {
    throw new Error(`compile.fragment() - Invalid type found in : "${type}".`);
  }

  const condition = _parseRecursiveContent(fragments.join(','), true);

  let ternary = '(';
  let end = '';
  while (true) {
    data = reg.exec(condition);
    if (!data) {
      break;
    }

    data[3] = data[3] || '';

    if (data[1].toLowerCase() !== 'other') {
      ternary += `(params["${key}"] == "${data[1]}") ? "${data[3]}" : `;
    } else {
      end += `"${data[3]}"`;
      break;
    }
  }

  // No "others" key in function
  ternary += `${end || '""'})`;

  return code.replace(`{${token}}`, `" + ${ternary} + "`);
}
/*
function () {
  // {N, plural, =0{Voyeur} =1{Voyeur} other {Voyeurs}}
  return new Function('params', 'return "" + (params.N == 0 ? "Voyeur" ? n == 1 : "Voyeur" : "Voyeurs") + "";');
 // abcd {{test}} 123
  return new Function('params', 'return "abcd" + ("test" in params ? params.test : "") + " 123";');
  // {GENDER, select, male {I am a} female {I am a} other {We are a}}
  return new Function('params', 'return "" + (params.GENDER == "male" ? "I am a" ? params.GENDER == "female" : "I am a" : "We are a") + "";');
}
*/

export default {
  /**
   * Initialize languages
   *
   * @param {Object} lang (lang_code => translation_table)
   */
  init(langs) {
    this._langs = langs;
  },

  /**
   * Define the default lang
   *
   * @param {string} lang
   */
  setLang(lang) {
    if (!(lang in this._langs)) {
      throw new Error(`translate.setLang() - Language "${lang}" not loaded yet !`);
    }
    this._defaultLang = lang;
  },

  /**
   * Get the default lang
   */
  getLang() {
    return this._defaultLang;
  },

  /**
   * Set fallback language
   *
   * @param {string} lang
   */
  setFallback(lang) {
    if (!lang) {
      this._fallbackLang = lang;
    }

    if (!(lang in this._langs)) {
      throw new Error(`translate.setFallback() - Language "${lang}" not loaded yet !`);
    }

    this._fallbackLang = lang;
  },

  /**
   * Get and parse translation
   *
   * @param {string} key
   * @param {Object|undefined} data
   */
  get(key, params) {
    const fn = this._getFunction(key);

    if (typeof fn === 'function') {
      return fn(params);
    }

    return fn;
  },

  /**
   * Get function from table
   * Create the function if does not exist.
   *
   * @param {string} key
   */
  _getFunction(key) {
    let fn = this._value(key);

    // Already compiled
    if (typeof fn === 'function') {
      return fn;
    }

    // Not found
    if (fn === key) {
      return key;
    }

    const content = fn.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const code = _parseRecursiveContent(content) || fn;

    // eslint-disable-next-line
    fn = Function('params', `"use strict"; if (!params) { params = {}; } return ("${code}");`);
    this._value(key, fn);

    return fn;
  },

  /**
   * Get value from languages
   *
   * @param {string} key
   * @private
   * @internal
   */
  _value(key, value) {
    if (!this._defaultLang) {
      return key;
    }

    let table = this._langs[this._defaultLang];

    if (!(key in table) && this._fallbackLang) {
      table = this._langs[this._fallbackLang];
    }

    if (table && key in table) {
      if (arguments.length === 2) {
        table[key] = value;
      }

      return table[key];
    }

    // Not found, returning key
    return key;
  },
};
