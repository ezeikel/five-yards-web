import Image from "next/image";
import styled from "styled-components";

const data = [
  {
    img: "/images/example-outfit-1.jpg",
    name: "Wurafola",
    averagePrice: 87,
  },
  {
    img: "/images/example-outfit-2.jpg",
    name: "Unique International Tailoring Services",
    averagePrice: 120,
  },
  {
    img: "/images/example-outfit-3.jpg",
    name: "Kitoko",
    averagePrice: 130,
  },
  {
    img: "/images/example-outfit-4.jpg",
    name: "Catah Dresses",
    averagePrice: 60,
  },
  {
    img: "/images/example-outfit-5.jpg",
    name: "Maze Couture",
    averagePrice: 260,
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
        text-align: center;
        color: var(--color-white);
        &:first-of-type {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: var(--spacing-medium);
        }
        &:nth-of-type(2) {
          font-size: 1.4rem;
          line-height: 10px;
        }
      }
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
        {data.map((tailor, index) => (
          <figure key={index}>
            <Image src={tailor.img} width="300" height="400" />
            <figcaption>
              <span>{tailor.name}</span>
              <span>£{tailor.averagePrice} garment average</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Wrapper>
  );
};

export default PopularTailors;
