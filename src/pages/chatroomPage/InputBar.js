import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

const Form = styled.form`
  display: flex;
  margin-top: 10%;
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  border-radius: 0.25rem;
  padding: 10px;
  margin-right: 10px;
`;

class InputBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    const { onSubmit } = this.props;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(input);
          this.setState({ input: '' });
        }}
      >
        <Input
          value={input}
          onChange={({ target: { value } }) => this.setState({ input: value })}
        />
        <Button type="submit" disabled={input === ''}>
          Send
        </Button>
      </Form>
    );
  }
}

InputBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputBar;
