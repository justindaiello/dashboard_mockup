import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: ${props => props.theme.white};
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: relative;
`;

export { StyledMain };
