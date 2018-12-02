import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';

const LanguageOptions = ['en', 'fr'];

const Options = LanguageOptions.map(lang => (
  <option value={lang} key={lang}>
    {lang}
  </option>
));

const LanguageSelect = ({ langChange }) => (
  <Select onChange={langChange}>{Options}</Select>
);

LanguageSelect.propTypes = {
  langChange: PropTypes.func.isRequired,
};

export default LanguageSelect;
