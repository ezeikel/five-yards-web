import styled from "styled-components";

export const Heading = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3rem;
  line-height: 33px;
  font-weight: var(--font-weight-secondary-medium);
  margin: 0 0 var(--spacing-large);
`;

export const InputWrapper = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: var(--font-weight-primary-semi-bold);
    line-height: 25px;
    margin: 0 0 var(--spacing-medium);
  }

  p {
    font-size: 1.6rem;
    line-height: 21px;
    margin: 0 0 var(--spacing-large);
  }

  span {
    font-size: 1.4rem;
  }

  textarea {
    margin: 0 0 var(--spacing-large);
  }

  > .select-input {
    & + .select-input {
      margin-top: var(--spacing-medium);
    }
  }

  .hour-selection {
    & + .hour-selection {
      margin-top: var(--spacing-large);
    }
  }

  .day {
    & + .day {
      margin-top: var(--spacing-large);
    }
  }
`;
