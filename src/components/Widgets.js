import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    font-size: 1.8rem;
    grid-column-gap: var(--spacing-medium);
    li {
      position: relative;
    }
    a {
      color: var(--color-black);
    }
`;

const UserActions = styled.ul`
  display: none;
  @media(min-width: 1024px) {
    background: #fff;
    border: 1px solid #ccc;
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    /* left: -175px; */
    width: 325px;
    /* transition: max-height .6s;
    transition-delay: .25s;
    max-height: ${({active}) => active ? '100vh' : '0'}; */
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 1rem;
      position: absolute;
      top: -1rem;
      background-color: tomato;
      height: 1rem;
      width: 1rem;
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1rem;
      position: absolute;
      top: -1rem;
      background-color: red;
      height: 1rem;
      width: 1rem;
    }
  }
`;

class Widgets extends Component {
  state = {
    active: false
  }

  toggleActive = () => {
    console.log('toggleActive()');
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <Wrapper>
        <li>
          <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
        </li>
        <li><Link to="/saved"><FontAwesomeIcon icon="heart" color="#000" size="1x" /></Link></li>
        <li><Link to="/bag"><FontAwesomeIcon icon="shopping-bag" color="#000" size="1x" /></Link></li>
          <UserActions active={this.state.active}>
            <li><Link to='my-account'>My Account</Link></li>
            <li><Link to='my-account'>My Orders</Link></li>
            <li><Link to='my-account'>Returns Information</Link></li>
            <li><Link to='my-account'>Contact Preferences</Link></li>
          </UserActions>
      </Wrapper>
    )
  }
}

export default Widgets;
