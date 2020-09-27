import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  h3 {
    font-size: 30px;
    margin: 0 0 var(--spacing-large);
  }

  > div {
    background-image: url("/images/folded-fabrics.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 22px;
    overflow: hidden;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      color: var(--color-white);
      padding: var(--spacing-large);
    }
    span {
      font-size: 30px;
      margin-bottom: var(--spacing-large);
    }

    p {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 var(--spacing-large);
    }

    button {
      font-size: 20px;
      width: 100%;
      padding: var(--spacing-small);
      color: var(--color-white);
      border: 2px solid var(--color-white);
      border-radius: 4px;
      background-color: transparent;
      &:first-of-type {
        background-color: var(--color-white);
        color: var(--color-black);
        border: 2px solid var(--color-white);
      }

      + button {
        margin-top: var(--spacing-medium);
      }
    }
  }
`;

const PartnerWithUs = () => {
  return (
    <Wrapper>
      <h3>Partner with us</h3>
      <div>
        <div>
          <span>Sign up</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Fabric seller</button>
          <button>Tailor</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerWithUs;
