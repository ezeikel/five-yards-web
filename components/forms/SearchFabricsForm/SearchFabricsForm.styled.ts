/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: var(--spacing-medium);
  }
`;
