import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: ${props => props.theme.white};
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: relative;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 2.5rem;
`;

export { StyledMain, StyledSection };
