import styled from 'styled-components';

const StyledMenuButton = styled.button`
  color: ${props => props.theme.darkBlue};
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1rem;
  transition: all 0.5s;
  cursor: pointer;
  position: relative;

  .arrow {
    font-size: 2rem;
    margin-left: 1rem;
    color: rgb(152, 153, 154);
  }
`;

const DropdownMenu = styled.div`
  transform-origin: 0 0;
  border: 1px solid ${props => props.theme.darkBlue};
  overflow: hidden;
  position: absolute;
  top: 95px;
  right: 17px;
  width: 80px;
  background-color: ${props => props.theme.transparentBlue};
  padding: 0.2rem;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  ${props => props.bottom && `top: 196px`};

  .menu-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const DropdownMenuItem = styled.li`
  background-color: transparent;
  flex: 1;
  color: ${props => props.theme.darkBlue};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export { StyledMenuButton, DropdownMenu, DropdownMenuItem };
