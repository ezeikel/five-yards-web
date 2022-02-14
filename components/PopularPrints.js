import Image from "next/image";
import styled from "styled-components";

const data = [
  {
    img: "/images/example-fabric-1.jpg",
    name: "Fiddlehead",
  },
  {
    img: "/images/example-fabric-2.jpg",
    name: "Ultra Violet",
  },
  {
    img: "/images/example-fabric-3.jpg",
    name: "Blossoms",
  },
  {
    img: "/images/example-fabric-4.jpg",
    name: "Pyramid Purple",
  },
  {
    img: "/images/example-fabric-5.jpg",
    name: "Spyro Gyro",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 var(--spacing-large);

  h3 {
    font-size: 3rem;
    line-height: 31px;
    margin: 0 0 var(--spacing-medium);
  }

  p {
    font-size: 1.8rem;
    line-height: 20px;
    margin: 0 0 var(--spacing-large);
  }

  figure {
    position: relative;
    flex: 0 0 90%;
    border-radius: var(--border-radius);
    margin: 0;
    + figure {
      margin-left: var(--spacing-medium);
    }
    figcaption {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: var(--spacing-large);
      span {
        color: var(--color-white);
        &:first-of-type {
          font-size: 2rem;
          font-weight: 600;
          line-height: 11px;
        }
      }
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
        {data.map((fabric, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <figure key={index}>
            <Image src={fabric.img} width="300" height="300" />
            <figcaption>
              <span>{fabric.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Wrapper>
  );
};

export default PopularPrints;
