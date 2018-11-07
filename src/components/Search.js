import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Form from './styles/Form';
import FormInput from './styles/FormInput';

const ReqeuestResetSchema = Yup.object().shape({
  search: Yup.string()
    .required('Required')
});

const Wrapper = styled.ul`
    display: none;
    @media(min-width: 768px) {
      display: grid;
      input {
        font-family: var(--default-font-family);
        font-size: 1.8rem;
      }
    }
`;

class Search extends Component {
  render() {
    return (
      <Wrapper>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ReqeuestResetSchema}
          onSubmit={async (values, actions) => {
            console.log('Searching...');
          }}
        >
          {({
            isSubmitting,
            errors,
            touched
          }) => (
            <Form>
              <FormInput type="search" name="search" placeholder="Search for fabrics, tailors and inspiration" />
            </Form>
          )}
        </Formik>
      </Wrapper>
    )
  }
}

export default Search;
