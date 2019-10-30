import styled from 'styled-components';

const StyledDropdown = styled.button`
  border: 1px solid ${props => props.theme.darkBlue};
  background-color: ${props => props.theme.transparentBlue};
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.darkBlue};
  padding: 1.2rem 3rem;
  border-radius: 30px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
  transition: all 0.5s;

  .down-arrow {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

export { StyledDropdown };
