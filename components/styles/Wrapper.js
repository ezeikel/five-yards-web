import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props =>
    props.maxWidth
      ? `
    max-width: ${props.maxWidth}
  `
      : null};
  ${props =>
    props.padding
      ? `
    padding: ${props.padding}
  `
      : null};
`;

export default Wrapper;
