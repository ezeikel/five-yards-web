import Link from "next/link";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  h3 {
    font-size: 3rem;
    font-weight: var(--font-weight-primary-semi-bold);
    margin: 0 0 var(--spacing-large);
  }

  > div {
    background-image: url("/images/folded-fabrics.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: var(--border-radius);
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
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--spacing-large);
    }

    p {
      font-size: 2rem;
      line-height: 25px;
      font-weight: var(--font-weight-primary-medium);
      text-align: center;
      margin: 0 0 var(--spacing-large);
    }

    a {
      width: 100%;

      & + a {
        margin-top: var(--spacing-medium);
      }

      button {
        color: var(--color-white);
        border: 2px solid var(--color-white);
        background-color: transparent;
        width: 100%;
      }

      &:first-of-type {
        button {
          background-color: var(--color-white);
          color: var(--color-black);
          border: 2px solid var(--color-white);
        }
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
          <Link href="/register/business">
            <a>
              <Button text="Fabric seller" />
            </a>
          </Link>
          <Link href="/register/business">
            <a>
              <Button text="Tailor" />
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerWithUs;
