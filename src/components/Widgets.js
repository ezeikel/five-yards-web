import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withAuth } from '../context/auth';

const Wrapper = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    font-size: 1.8rem;
    grid-column-gap: var(--spacing-medium);
    li {
      position: relative;
    }
    a {
      display: grid;
      place-items: center;
      color: var(--color-black);
    }
`;

const UserActions = styled.ul`
  display: none;
  @media(min-width: 1024px) {
    background: #fff;
    border: ${({active}) => active ? '1px solid #ddd;' : 'none'};
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    /* left: -175px; */
    width: 325px;
    transition: max-height .6s;
    /* transition-delay: .25s; */
    max-height: ${({active}) => active ? '100vh' : '0'};
    font-size: 1.6rem;

    overflow: hidden;

    max-height: ${({active}) => active ? '100vh' : '0'};

    /* &:before {
      content: "";
      width: 0;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 11px solid red;
      position: absolute;
      right: 0;
      opacity: ${({active}) => active ? '1' : '0'};
      transition: opacity .6s;
      transition-delay: .25s;
      z-index: 1;

      left: 185px;
    } */
  }
`;

const UserListItem = styled.li`
  @media(min-width: 1024px) {
    position: relative;
    cursor: pointer;
  }
`;

const Signin = styled.li`
  padding: var(--spacing-medium);
  background-color: #EEEEEE;
`;

const UserActionItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: var(--spacing-medium);
  padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) var(--spacing-large);
  & + li {
    border-top: 1px solid #ddd;
  }
  &:hover {
    a, path {
    color: #0770cf;
    }
  }
`;

const User = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: var(--spacing-medium);
  justify-content: start;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Bold = styled.span`
  font-weight: bold;
`;

class Widgets extends Component {
  state = {
    active: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  formatName = name => {
    const firstName = name.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };

  render() {
    const { currentUser, signout } = this.props;
    return (
      <Wrapper>
        <UserListItem active={this.state.active} onClick={this.toggleActive}>
          <FontAwesomeIcon icon="user" color="#000" size="1x" />
          <UserActions active={this.state.active}>
            <Signin>
              {
              currentUser.isAuthenticated
                ? <User><Bold>Hi {this.formatName(currentUser.fullName)}</Bold> <Underline  onClick={signout}>Sign Out</Underline></User>
                : <User className='signin'><Underline><Link to='/signin'>Sign In</Link></Underline></User>
              }
            </Signin>
            {
              currentUser.isAuthenticated
                ?
                  <Fragment>
                    <UserActionItem>
                      <FontAwesomeIcon icon="user" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='my-account'>My Account</Link>
                    </UserActionItem>
                    <UserActionItem>
                      <FontAwesomeIcon icon="money-bill" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='sell'>Sell</Link>
                    </UserActionItem>
                    <UserActionItem>
                      <FontAwesomeIcon icon="box" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='my-account'>My Orders</Link>
                    </UserActionItem>
                    <UserActionItem>
                      <FontAwesomeIcon icon="calendar-alt" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='my-events'>My Events</Link>
                    </UserActionItem>
                    <UserActionItem>
                      <FontAwesomeIcon icon="exchange-alt" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='my-account'>Returns Information</Link>
                    </UserActionItem>
                    <UserActionItem>
                      <FontAwesomeIcon icon="headset" color="#000" size="1x" onClick={this.toggleActive} />
                      <Link to='my-account'>Contact Preferences</Link>
                    </UserActionItem>
                  </Fragment>
                :
                  null
            }
          </UserActions>
        </UserListItem>
        <li><Link to="/saved"><FontAwesomeIcon icon="heart" color="#000" size="1x" /></Link></li>
        <li><Link to="/messages"><FontAwesomeIcon icon="comment-alt" color="#000" size="1x" /></Link></li>
        <li><Link to="/bag"><FontAwesomeIcon icon="shopping-bag" color="#000" size="1x" /></Link></li>
      </Wrapper>
    )
  }
}

export default withAuth(Widgets);
