import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 var(--spacing-large);

  h3 {
    font-size: 30px;
    line-height: 31px;
    margin: 0 0 var(--spacing-medium);
  }

  p {
    font-size: 18px;
    line-height: 20px;
    margin: 0 0 var(--spacing-large);
  }

  img {
    border-radius: 13px;
    width: 90%;
    + img {
      margin-left: var(--spacing-medium);
    }
  }

  > div {
    display: flex;
    overflow-x: scroll;
  }
`;

const PopularPrints = () => {
  return (
    <Wrapper>
      <h3>Popular prints</h3>
      <p>Purchase popular prints sold by retailers near and far.</p>
      <div>
        <img src="/images/example-fabric.jpg" />
        <img src="/images/example-fabric.jpg" />
        <img src="/images/example-fabric.jpg" />
        <img src="/images/example-fabric.jpg" />
        <img src="/images/example-fabric.jpg" />
      </div>
    </Wrapper>
  );
};

export default PopularPrints;
