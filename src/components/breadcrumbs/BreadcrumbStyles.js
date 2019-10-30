import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 4rem;

  .breadcrumbs {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 1.3rem;
    word-spacing: 0.5rem;
  }

  .arrow-icon {
    font-size: 3rem;
    align-self: center;
  }

  .breadcrumb-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: rgb(76, 120, 206);
  }
`;

export { StyledBreadcrumb };
