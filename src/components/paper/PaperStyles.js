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

  .divider {
    width: 100%;
    border: 0.5px solid rgb(152, 153, 154);
  }

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  .top {
    display: inline-flex;
    max-height: 50px;

    .sub-heading {
      display: inline;
      font-weight: 300;
      margin: 0;
      vertical-align: center;
    }

    .color {
      color: ${props => props.theme.darkBlue};
    }

    .button-container {
      display: flex;
      flex-direction: column;
      margin-left: auto;
    }

    .tooltip {
      background-color: rgb(152, 153, 154);
      color: rgb(254, 255, 255);
      border-radius: 50%;
      font-size: 1.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  .info-block {
    margin: 0;
    font-size: 1.2rem;
    width: 60%;
    color: rgb(152, 153, 154);
  }
`;

export { StyledPaper, StyledSection };
