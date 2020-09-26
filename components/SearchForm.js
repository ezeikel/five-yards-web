import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchTailor from "./SearchTailorsForm";
import SearchFabric from "./SearchFabricsForm";
import SearchShop from "./SearchShopsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 12px;
  padding: var(--spacing-large);

  hr {
    background-color: #cccccc;
    height: 1px;
    width: 100%;
    border: 0;
    margin: 0 0 var(--spacing-medium);
  }

  ul {
    display: flex;
    margin-bottom: var(--spacing-medium);
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      flex: 0 1 33.33%;
    }
  }

  button {
    font-family: var(--font-family-primary);
    font-size: 14px;
    background-color: var(--color-primary);
    width: 100%;
    padding: var(--spacing-small);
    outline: none;
    border: 1px solid var(--color-primary);
    color: var(--color-white);
    border-radius: 6px;
  }
`;

const Heading = styled.h3`
  font-family: var(--secondary-font-family);
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 0 var(--spacing-medium);
`;

const SearchForm = () => {
  const [searchType, setSearchType] = useState("tailor");
  const [heading, setHeading] = useState("");

  useEffect(() => {
    switch (searchType) {
      case "tailor":
        setHeading("Find a tailor, locally or nationwide.");
        // setForm(SearchTailor);
        break;
      case "fabric":
        setHeading("Find your favourite fabrics.");
        // setForm(SearchFabric);
        break;
      case "shop":
        setHeading("Why not go directly to your favourite shop.");
        // setForm(SearchShop);
        break;
    }
  }, [searchType]);

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <hr />
      <ul>
        <li onClick={() => setSearchType("tailor")}>
          <FontAwesomeIcon
            icon={["fal", "cut"]}
            color="var(--color-black)"
            size="2x"
          />
          Tailor
        </li>
        <li onClick={() => setSearchType("fabric")}>
          <FontAwesomeIcon
            icon={["fal", "layer-group"]}
            color="var(--color-black)"
            size="2x"
          />
          Fabric
        </li>
        <li onClick={() => setSearchType("shop")}>
          <FontAwesomeIcon
            icon={["fal", "search"]}
            color="var(--color-black)"
            size="2x"
          />
          Find
        </li>
      </ul>
      <div>
        {searchType === "tailor" && <SearchTailor />}
        {searchType === "fabric" && <SearchFabric />}
        {searchType === "shop" && <SearchShop />}
      </div>
    </Wrapper>
  );
};

export default SearchForm;
