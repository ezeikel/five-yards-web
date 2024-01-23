import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--spacing-medium);

  input {
    border-color: #bebebe;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-large);
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  .input + .input {
    margin-top: var(--spacing-medium);
  }
`;

export const Heading = styled.h2`
  font-family: var(--font-family-secondary);
  font-size: 3rem;
  font-weight: var(--font-weight-secondary-medium);
  text-align: center;
  margin: 0 0 var(--spacing-medium);
`;

export const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: var(--font-weight-primary-regular);
  text-align: center;
  margin: 0 0 var(--spacing-large);
`;
