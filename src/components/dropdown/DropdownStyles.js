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

  .arrow {
    font-size: 2rem;
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

const Pointer = styled.div`
  width: 0;
  height: 0;
  margin: 0 auto;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${props => props.theme.darkBlue};
`;

const DropdownMenu = styled.div`
  z-index: 1;
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

  .menu-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
`;

const DropdownMenuItem = styled.li`
  background-color: transparent;
  padding: 1rem 0;
  flex: 1;
  .menu-link {
    text-decoration: none;
    color: rgb(66, 112, 203);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
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
      background: rgb(66, 112, 203);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 40%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
    .menu-icon {
      font-size: 2rem;
      margin-left: auto;
    }
  }
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
  StyledDropdown,
  Pointer,
  DropdownMenu,
  DropdownMenuItem,
  StyledContainer,
  StyledArrowContainer,
};
