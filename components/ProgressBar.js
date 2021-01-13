import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 10px;
  background-color: #d6d6d6;
  span {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "var(--color-primary)"};
    width: ${({ percent }) => (percent ? `${percent}%` : "0")};
  }
`;

const ProgressBar = ({ className, backgroundColor, percent }) => {
  return (
    <Wrapper
      className={className}
      backgroundColor={backgroundColor}
      percent={percent}
    >
      <span />
    </Wrapper>
  );
};

export default ProgressBar;
