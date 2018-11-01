import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--spacing-small);
    justify-items: center;
    font-size: 1.8rem;
    a {
      color: var(--color-black);
    }
`;

class Widgets extends Component {
  render() {
    return (
      <Wrapper>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/saved">Saved</Link></li>
        <li><Link to="/bag">Bag</Link></li>
      </Wrapper>
    )
  }
}

export default Widgets;
