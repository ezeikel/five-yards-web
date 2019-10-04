import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.ul`
    display: none;
    @media(min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: var(--spacing-small);
      justify-items: center;
      font-size: 1.8rem;
      a {
        color: var(--color-black);
      }
    }
`;

class GenderSelector extends Component {
  render() {
    return (
      <Wrapper>
        <Link href="women">Women</Link>
        <Link href="men">Men</Link>
      </Wrapper>
    )
  }
}

export default GenderSelector;
