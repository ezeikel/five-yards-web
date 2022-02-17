import styled from "styled-components";
import Switch from "react-switch";

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledSwitch = styled(Switch)`
  display: flex;

  .react-switch-bg,
  .react-switch-handle {
    border: 1px solid var(--color-input-border) !important;
  }
  .react-switch-handle > div {
    display: flex;
    justify-content: center;
    align-items: center;

    .fa-times {
      margin-left: -0.2em; // TODO: not sure why x is not centered correctly without this?
    }
  }
`;
