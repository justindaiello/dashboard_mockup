import styled from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;

  .on {
    display: none;
  }

  .on {
    color: white;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 30%;
    font-size: 10px;
  }

  .off {
    color: rgb(155, 156, 157);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 70%;
    font-size: 10px;
  }

  input:checked + .slider .on {
    display: block;
  }

  input:checked + .slider .off {
    display: none;
  }

  input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(228, 229, 230);
    transition: 0.5s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: rgb(73, 120, 219);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px rgb(73, 120, 219);
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 19px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export { StyledSwitch };
