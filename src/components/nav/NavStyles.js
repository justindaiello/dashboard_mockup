import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: ${props => props.theme.green};
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.boxShadow};
  height: 100vh;
`;

export { StyledNav };
