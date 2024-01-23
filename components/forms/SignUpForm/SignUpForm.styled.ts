import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--spacing-medium);
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
  .text-input + .text-input {
    margin-top: var(--spacing-medium);
  }
`;
