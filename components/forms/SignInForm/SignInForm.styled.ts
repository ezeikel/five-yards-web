import styled from "styled-components";
import { Form } from "formik";

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

export const Help = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: var(--spacing-medium);
  .input-checkbox {
    font-weight: var(--font-weight-primary-regular);
    display: flex;
    align-items: center;
    input {
      margin-right: var(--spacing-small);
    }
  }
  a {
    font-weight: var(--font-weight-primary-medium);
    color: var(--color-primary);
  }
`;
