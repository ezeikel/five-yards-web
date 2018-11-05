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
    border: ${({active}) => active ? '1px solid #ccc;' : 'none'};
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    /* left: -175px; */
    width: 325px;
    transition: max-height .6s;
    transition-delay: .25s;
    max-height: ${({active}) => active ? '100vh' : '0'};
    font-size: 1.6rem;

    overflow: hidden;

    max-height: ${({active}) => active ? '100vh' : '0'};
  }
`;

const UserListItem = styled.li`
  @media(min-width: 1024px) {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      bottom: -15px;
      height: 10px;
      width: 10px;
    }
    &:before {
      // left: -50%;
      // width: 0;
      // height: 0;
      // border-left: 1rem solid transparent;
      // border-right: 1rem solid transparent;
      // border-bottom: 1rem solid var(--color-black);

      //left: 185px;

      content: "";
      width: 0;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 11px solid #eee;
      position: absolute;
      //top: 0;
      right: 0;
      opacity: ${({active}) => active ? '1' : '0'};
      transition: opacity .6s;
      transition-delay: .25s;
      z-index: 1;

      bottom: -10px;
    }
  }
`;

const Signin = styled.li`
  padding: var(--spacing-medium);
  background-color: #EEEEEE;
  span {
    text-decoration: underline;
  }
`;

const UserActionItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: var(--spacing-medium);
  padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) var(--spacing-large);
  & + li {
    border-top: 1px solid #ddd;
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
        <UserListItem active={this.state.active}>
          <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
          <UserActions active={this.state.active}>
            <Signin><span>Signin</span> / <span>Join</span></Signin>
            <UserActionItem>
              <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
              <Link to='my-account'>My Account</Link>
            </UserActionItem>
            <UserActionItem>
              <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
              <Link to='my-account'>My Orders</Link>
            </UserActionItem>
            <UserActionItem>
              <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
              <Link to='my-account'>Returns Information</Link>
            </UserActionItem>
            <UserActionItem>
              <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
              <Link to='my-account'>Contact Preferences</Link>
            </UserActionItem>
          </UserActions>
        </UserListItem>
        <li><Link to="/saved"><FontAwesomeIcon icon="heart" color="#000" size="1x" /></Link></li>
        <li><Link to="/bag"><FontAwesomeIcon icon="shopping-bag" color="#000" size="1x" /></Link></li>
      </Wrapper>
    )
  }
}

export default Widgets;
