import styled from 'styled-components';

const StyledHeader = styled.header`
  margin: 2.5rem 4rem 0 4rem;
  .header-container {
    line-height: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    height: 50px;
  }

  .heading {
    margin: 0;
  }
`;

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  align-items: flex-start;
  justify-content: space-between;

  li {
    list-style-type: none;
    margin: 0 1rem;
  }

  .icon-container,
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  .notifications-icon {
    color: rgb(129, 164, 231);
    font-size: 2.5rem;
  }

  .profile-photo {
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export { StyledHeader, StyledNav };
