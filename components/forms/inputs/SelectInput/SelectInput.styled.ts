import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SelectProps = {
  leftIconWidth: number;
  angleDownIconWidth: number;
};

type LeftIconProps = {
  leftIconHeight: number;
};

type RightIconProps = {
  rightIconHeight: number;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .error {
    margin-top: var(--spacing-small);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
`;

export const Select = styled.select<SelectProps>`
  position: relative;
  line-height: normal;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-input-border);
  width: 100%;
  padding: var(--spacing-medium);
  margin: 0;
  font-family: var(--font-family-primary);
  font-size: 1.6rem;
  background-color: var(--color-white);

  padding: ${({ leftIconWidth, angleDownIconWidth }) =>
    leftIconWidth
      ? `var(--spacing-medium) calc(
  ${angleDownIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
) var(--spacing-medium) calc(
  ${leftIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
);`
      : `var(--spacing-medium) calc(
  ${angleDownIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
) var(--spacing-medium) var(--spacing-medium)`};
`;

export const Label = styled.label`
  display: flex;
`;

export const LeftIcon = styled(FontAwesomeIcon)<LeftIconProps>`
  position: absolute;
  left: var(--spacing-medium);
  top: 50%;
  margin-top: ${({ leftIconHeight }) =>
    leftIconHeight ? `-${leftIconHeight / 2}px` : "0"};
  z-index: 1;
`;

export const RightIcon = styled(FontAwesomeIcon)<RightIconProps>`
  position: absolute;
  right: var(--spacing-medium);
  top: 50%;
  margin-top: ${({ rightIconHeight }) =>
    rightIconHeight ? `-${rightIconHeight / 2}px` : "0"};
  z-index: 1;
`;
