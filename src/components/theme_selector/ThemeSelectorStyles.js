import styled from 'styled-components';

const StyledPaper = styled.div`
  background-color: rgb(254, 255, 255);
  position: relative;
  display: flex;
  flex: 1;
  min-height: 250px;
  flex-direction: column;

  padding: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);

  .paper-heading {
    margin: 0 0 2rem 0;
    font-weight: 400;
    letter-spacing: 0.6px;
    font-size: 1.5rem;
    color: rgb(152, 153, 154);
  }

  .suggest {
    background-color: rgb(195, 196, 197);
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 50px;
    width: 90px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
    font-size: 3rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  .theme-title {
    margin: 0;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-left: 1rem;
    color: rgb(195, 196, 197);
  }
`;

const StyledItem = styled.button`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  height: 50px;
  width: 90px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3);
  ${props => props.code === 'purps' && `background-color: rgb(52, 47, 61)`};
  ${props =>
    props.code === 'tatooine' && `background-color: rgb(228, 215, 189)`};
  ${props => props.code === 'endor' && `background-color: rgb(84, 114, 114)`};
  ${props => props.code === 'biz' && `background-color: rgb(48, 64, 88)`};
  ${props => props.code === 'grape' && `background-color: rgb(61, 57, 97)`};
  ${props => props.code === 'blue' && `background-color: rgb(67, 111, 203)`};
  ${props =>
    props === 'winter' &&
    `background-color: rgb(254, 255, 255); border: 1px solid rgb(195, 196, 197)`};

  .theme-list {
    color: white;
    padding-left: 1.5rem;
    ${props => props.code === 'winter' && `color: rgb(0, 0, 0)`};
    @media (max-width: 700px) {
      display: none;
    }
  }

  .filler-line-1 {
    position: absolute;
    ${props =>
      props.code === 'purps' ||
      props.code === 'tatooine' ||
      props.code === 'endor' ||
      props.code === 'biz'
        ? `top: 82px`
        : `top: 185px`}
    border-radius: 2px;
    height: 2px;
    margin: 0;
    width: 50px;
    ${props =>
      props.code === 'winter'
        ? `background-color: rgb(0,0,0)`
        : `background-color: white`};
  }

  .filler-line-2 {
    position: absolute;
    ${props =>
      props.code === 'purps' ||
      props.code === 'tatooine' ||
      props.code === 'endor' ||
      props.code === 'biz'
        ? `top: 95px`
        : `top: 198px`}
    border-radius: 2px;
    height: 2px;
    margin: 0;
    width: 50px;
    ${props =>
      props.code === 'winter'
        ? `background-color: rgb(0,0,0)`
        : `background-color: white`}
  }

  .filler-line-3 {
    position: absolute;
    top: 108px;
    ${props =>
      props.code === 'purps' ||
      props.code === 'tatooine' ||
      props.code === 'endor' ||
      props.code === 'biz'
        ? `top: 108px`
        : `top: 209px`}
    border-radius: 2px;
    height: 2px;
    margin: 0;
    width: 50px;
    ${props =>
      props.code === 'winter'
        ? `background-color: rgb(0,0,0)`
        : `background-color: white`}
  }
`;

export { StyledPaper, StyledGrid, StyledItem };
