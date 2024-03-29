/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div {
    &:first-of-type {
      border-top: 1px solid #d1cfcf;
      padding: var(--spacing-medium) var(--spacing-large);
      h3 {
        font-size: 2.5rem;
        margin: 0 0 var(--spacing-tiny);
      }
      p {
        font-size: 1.4rem;
        margin: 0;
      }
    }
    &:nth-of-type(2) {
      background-color: #f2f2f2;
      padding: var(--spacing-large);

      > div {
        background-color: var(--color-white);
        padding: var(--spacing-medium);
        border-radius: var(--border-radius);

        + div {
          margin-top: var(--spacing-medium);
        }
      }
    }
  }
`;

export const Heading = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3rem;
  font-weight: var(--font-weight-secondary-medium);
  margin: 0 0 var(--spacing-small);
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-bottom: var(--spacing-medium);
  }
  span {
    display: flex;
    justify-content: center;
    &:first-of-type {
      margin-bottom: var(--spacing-small);
      font-size: 2rem;
      font-weight: 700;
    }
    &:last-of-type {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-of-type {
      margin-bottom: var(--spacing-medium);
      span {
        &:first-of-type {
          font-size: 2.5rem;
          font-weight: 700;
        }
        &:nth-of-type(2) {
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }
    &:nth-of-type(2) {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: var(--spacing-medium);
    }
    &:nth-of-type(3) {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: var(--spacing-medium);
    }
    &:nth-of-type(4) {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: var(--spacing-large);
    }
  }
  hr {
    background-color: #bebebe;
    height: 1px;
    width: 100%;
    border: 0;
    margin: 0 0 var(--spacing-medium);
  }
`;
