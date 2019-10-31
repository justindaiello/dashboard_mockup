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
    color: rgb(152, 153, 154);
  }
`;

const StyledArrowContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform-origin: center;
  ${props => (props.rotate === 'spin' ? `transform: rotate(180deg)` : '')};
`;

const DropdownMenu = styled.div`
  transform-origin: 0 0;
  border: 1px solid ${props => props.theme.darkBlue};
  overflow: hidden;
  position: absolute;
  top: 111px;
  right: 17px;
  width: 80px;
  background-color: ${props => props.theme.transparentBlue};
  padding: 0.2rem;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  ${props => props.bottom && `top: 215px`};

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
  justify-content: center;
`;

const Pointer = styled.div`
  width: 0;
  height: 0;
  margin: 0 auto;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${props => props.theme.darkBlue};
`;

const StyledContainer = styled.div`
  z-index: 1;
  opacity: 0;
  overflow-y: hidden;
  max-height: 150px;
  transition: all 0.5s ease, z-index 0.5s;
  ${props => props.showMenu === 'show' && `opacity: 1`}
`;

export {
  StyledMenuButton,
  DropdownMenu,
  DropdownMenuItem,
  StyledArrowContainer,
  Pointer,
  StyledContainer,
};
