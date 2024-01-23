import styled from 'styled-components';

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

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-medium);
      > span {
        &:first-of-type {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const HourSelection = styled.div`
  display: flex;
  > div {
    flex: 1 1 50%;
    + div {
      margin-left: var(--spacing-small);
    }
  }
`;

export const Closed = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: #db0707;
  font-weight: var(--font-weight-primary-medium);
`;
