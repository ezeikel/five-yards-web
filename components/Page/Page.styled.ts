import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Inner = styled.main`
  flex: 1 0 auto;
  display: flex;
  > div {
    flex: 1 0 100%;
  }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  /* .toast-container */
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  .toast {
    background-color: var(--color-black);
    margin: 0;
    cursor: auto;
  }
  button[aria-label='close'] {
    display: none;
  }
  .toast {
    background-color: var(--color-black);
  }
  .body {
    background-color: var(--color-black);
    color: var(--color-white);
    font-family: var(--font-family-primary);
    margin: 0;
    display: flex;
    place-items: center;
    font-size: 1.6rem;
    padding: var(--spacing-medium);
  }
`;
