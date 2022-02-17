import Image from "next/image";
import { Wrapper } from "./PopularPrints.styled";

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
