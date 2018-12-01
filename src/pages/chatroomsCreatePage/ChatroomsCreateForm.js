import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';

import { createChatroom } from 'modules/chatrooms/thunks';
import Form from 'components/formComponents/Form';
import FormWrapper from 'components/formComponents/Wrapper';
import FormField from 'components/formComponents/Field';
import Button from 'components/Button';

const ChatroomsCreateForm = ({
  submitStatus,
  errors,
  touched,
  isSubmitting,
}) => (
  <FormWrapper>
    <Form submitStatus={submitStatus} errors={errors} touched={touched}>
      <FormField
        type="name"
        name="name"
        placeholder="Room name"
        error={touched.name && errors.name}
      />
      <FormField
        type="description"
        name="description"
        placeholder="Room description"
        error={touched.description && errors.description}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        fontSize="1.5rem"
        padding="0.375rem 4rem"
      >
        Submit
      </Button>
    </Form>
  </FormWrapper>
);

ChatroomsCreateForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submitStatus: PropTypes.shape({
    succeeded: PropTypes.bool,
    failed: PropTypes.bool,
    failedError: PropTypes.shape({ message: PropTypes.string }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  submitStatus: state.chatroomsProperties.creation,
});

const mapDispatchToProps = dispatch => ({
  createChatroom: chatroom => dispatch(createChatroom(chatroom)),
});

const ChatroomsCreateFormik = withFormik({
  mapPropsToValues({ name, description }) {
    return {
      name: name || '',
      description: description || '',
    };
  },

  validationSchema: yup.object().shape({
    name: yup
      .string()
      .max(20, 'Name must be no longer than 20 characters')
      .min(3, 'Name must be 3 characters or longer')
      .required('Room name is required'),
    description: yup.string(),
  }),

  handleSubmit(values, { props, resetForm }) {
    props.createChatroom({
      name: values.name,
      description: values.description,
    });
    resetForm();
  },
})(ChatroomsCreateForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatroomsCreateFormik);
