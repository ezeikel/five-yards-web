import Image from "next/image";
import { Wrapper } from "./PopularTailors.styled";

const data = [
  {
    id: 1,
    img: "/images/example-outfit-1.jpg",
    name: "Wurafola",
    averagePrice: 87,
  },
  {
    id: 2,
    img: "/images/example-outfit-2.jpg",
    name: "Unique International Tailoring Services",
    averagePrice: 120,
  },
  {
    id: 3,
    img: "/images/example-outfit-3.jpg",
    name: "Kitoko",
    averagePrice: 130,
  },
  {
    id: 4,
    img: "/images/example-outfit-4.jpg",
    name: "Catah Dresses",
    averagePrice: 60,
  },
  {
    id: 5,
    img: "/images/example-outfit-5.jpg",
    name: "Maze Couture",
    averagePrice: 260,
  },
];

const PopularTailors = () => {
  return (
    <Wrapper>
      <h3>Popular tailors</h3>
      <div>
        {data.map((tailor) => (
          <figure key={tailor.id}>
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
