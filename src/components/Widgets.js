import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    font-size: 1.8rem;
    grid-column-gap: var(--spacing-medium);
    a {
      color: var(--color-black);
    }
`;

class Widgets extends Component {
  render() {
    return (
      <Wrapper>
        <li><Link to="/account"><FontAwesomeIcon icon="user" color="#000" size="md" /></Link></li>
        <li><Link to="/saved"><FontAwesomeIcon icon="heart" color="#000" size="md" /></Link></li>
        <li><Link to="/bag"><FontAwesomeIcon icon="shopping-bag" color="#000" size="md" /></Link></li>
      </Wrapper>
    )
  }
}

export default Widgets;
