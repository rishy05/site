import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: var(--primary-purple);
  color: var(--white);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    
    li {
      margin: 0 1rem;
      
      a {
        color: var(--white);
        text-decoration: none;
      }
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  color: var(--white);
  border: 1px solid var(--white);
`;

const SignupButton = styled(Button)`
  background-color: var(--white);
  color: var(--primary-purple);
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--white);
  border: 1px solid var(--primary-purple);
  border-radius: 4px;
  padding: 0.5rem 0;
  list-style: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  z-index: 1;

  li {
    padding: 0.5rem 1rem;

    a {
      text-decoration: none;
      color: var(--primary-purple);
      display: block;
    }

    &:hover {
      background-color: var(--primary-blue);
      a {
        color: var(--white);
      }
    }
  }
`;

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <HeaderWrapper>
      <Logo>PASSINNOVATE</Logo>
      <Nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#internships">Internships</a></li>
        </ul>
      </Nav>
      <AuthButtons>
        <LoginButton>Login</LoginButton>
        <DropdownWrapper>
          <SignupButton onClick={toggleDropdown}>Sign up</SignupButton>
          {dropdownVisible && (
            <DropdownMenu>
              <li><a href="#employer-signup">Employer Sign up</a></li>
              <li><a href="#candidate-signup">Candidate Sign up</a></li>
            </DropdownMenu>
          )}
        </DropdownWrapper>
      </AuthButtons>
    </HeaderWrapper>
  );
}

export default Header;