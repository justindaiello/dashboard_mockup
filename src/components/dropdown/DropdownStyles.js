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

  .arrow {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;

const Pointer = styled.div`
  width: 0;
  height: 0;
  margin: 0 auto;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${props => props.theme.darkBlue};
`;

const DropdownMenu = styled.div`
  z-index: 10;
  transform-origin: 0 0;
  border: 1px solid ${props => props.theme.darkBlue};
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.transparentBlue};
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
`;

export { StyledDropdown, Pointer, DropdownMenu };
