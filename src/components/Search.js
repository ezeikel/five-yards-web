import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './styles/Input';

const Wrapper = styled.ul`
    display: grid;
    input {
      font-family: var(--default-font-family);
      font-size: 1.8rem;
    }
`;

class Search extends Component {
  render() {
    return (
      <Wrapper>
        <Input type="search" />
      </Wrapper>
    )
  }
}

export default Search;
