import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 var(--spacing-large);

  h3 {
    font-size: 30px;
    line-height: 31px;
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

const PopularTailors = () => {
  return (
    <Wrapper>
      <h3>Popular tailors</h3>
      <div>
        <img src="/images/example-outfit.jpg" />
        <img src="/images/example-outfit.jpg" />
        <img src="/images/example-outfit.jpg" />
        <img src="/images/example-outfit.jpg" />
        <img src="/images/example-outfit.jpg" />
      </div>
    </Wrapper>
  );
};

export default PopularTailors;
