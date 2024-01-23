import { Wrapper } from './ProgressBar.styled';

type ProgressBarProps = {
  percent: number;
  backgroundColor?: string;
  className?: string;
};

const ProgressBar = ({
  className,
  backgroundColor = 'var(--color-primary)',
  percent,
}: ProgressBarProps) => {
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
