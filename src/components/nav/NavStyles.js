import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 200px;
  transition: all 0.5s;
  background-color: ${props => props.theme.green};
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.boxShadow};
  height: 100vh;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    color: ${props => props.theme.white};
    font-size: 1.8rem;
    text-align: center;
    font-weight: 400;
    margin: 0;
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
  span {
    padding-right: 2rem;
  }
`;

export { StyledNav, StyledLink, StyledHeader };
