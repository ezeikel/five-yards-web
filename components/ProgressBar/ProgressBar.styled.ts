/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from "styled-components";

type WrapperProps = {
  backgroundColor: string;
  percent: number;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 10px;
  background-color: #d6d6d6;
  span {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || "var(--color-primary)"};
    width: ${({ percent }) => (percent ? `${percent}%` : "0")};
  }
`;
