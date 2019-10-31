import styled from 'styled-components';

const StyledNav = styled.nav`
  /* navigation width when nav is open and closed */
  ${props => (props.open ? `width: 200px` : `width: 50px`)}
  transition: all 0.5s;
  background-color: ${props => props.theme.green};
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.boxShadow};
  height: 100vh;

  /* icon padding when nav is open and closed */
  .navigation {
    ${props => (props.open ? `padding-left: 30px` : `padding-left: 15px`)};
    list-style-type: none;
    transition: all 0.5s;
    @media (max-width: 1000px) {
      padding-left: 15px;
    }
  }

  li {
    margin-bottom: 1.2rem;
    :last-child {
      margin-bottom: 10rem;
    }
  }

  @media (min-width: 1001px) {
    .notifications-icon {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    width: 50px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.white};
  font-size: 2rem;
  padding-left: 0.5rem;
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform-origin: center;
  ${props => (props.rotate === 'spin' ? `transform: rotate(180deg)` : '')};

  svg {
    margin-top: 0.5rem;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .nav-heading {
    color: ${props => props.theme.white};
    font-size: 1.8rem;
    text-align: center;
    font-weight: 400;
    margin: 0;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.white};
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  &:after {
    height: 2px;
    background: ${props => props.theme.white};
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 35%;
    margin-top: 2rem;
  }
  &:hover,
  &:focus {
    outline: none;
    &:after {
      width: calc(100% - 60px);
    }
  }
  span {
    padding-right: 2rem;
  }
`;

export { StyledNav, StyledLink, StyledHeader, StyledButton };
