/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 var(--spacing-large);

  h3 {
    font-size: 3rem;
    line-height: 31px;
    margin: 0 0 var(--spacing-large);
  }

  figure {
    position: relative;
    flex: 0 0 90%;
    border-radius: var(--border-radius);
    margin: 0;
    + figure {
      margin-left: var(--spacing-medium);
    }
    figcaption {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: var(--spacing-large);
      span {
        text-align: center;
        color: var(--color-white);
        &:first-of-type {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: var(--spacing-medium);
        }
        &:nth-of-type(2) {
          font-size: 1.4rem;
          line-height: 10px;
        }
      }
    }
  }

  > div {
    display: flex;
    overflow-x: scroll;
  }
`;
