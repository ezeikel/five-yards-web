import { Wrapper } from "./ProgressBar.styled";

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
