import styled from "styled-components";
import { Form } from "formik";
import ProgressBar from "../../ProgressBar/ProgressBar";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Save = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
  font-weight: var(--font-weight-primary-semi-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-large);
`;

export const StyledProgressBar = styled(ProgressBar)`
  margin-bottom: var(--spacing-huge);
`;

export const StyledForm = styled(Form)`
  .input-wrapper {
    & + .input-wrapper {
      margin-top: var(--spacing-huge);
    }
  }

  button {
    margin-top: var(--spacing-large);
    width: 100%;
  }
`;
