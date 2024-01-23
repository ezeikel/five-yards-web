import styled from 'styled-components';

type Wrapperprops = {
  iconHeight: number;
  passwordIconHeight: number;
};

type InputProps = {
  iconWidth: number;
};

export const Wrapper = styled.div<Wrapperprops>`
  position: relative;
  width: 100%;

  svg {
    &:first-of-type {
      position: absolute;
      left: var(--spacing-medium);
      top: 50%;
      margin-top: ${({ iconHeight }) =>
        iconHeight ? `-${iconHeight / 2}px` : '0'};
      z-index: 1;
    }
    &:nth-of-type(2) {
      position: absolute;
      right: var(--spacing-medium);
      top: 50%;
      margin-top: ${({ passwordIconHeight }) =>
        passwordIconHeight ? `-${passwordIconHeight / 2}px` : '0'};
      z-index: 1;
    }
  }

  .error {
    margin-top: var(--spacing-small);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
`;

export const Input = styled.input<InputProps>`
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

  padding: ${({ iconWidth }) =>
    iconWidth
      ? `var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) calc(
  ${iconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
);`
      : `var(--spacing-medium)`};
`;

export const Label = styled.label`
  display: flex;
`;
