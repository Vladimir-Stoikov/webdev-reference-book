import styled from "styled-components";

export const SidebarSt = styled.aside`
  min-width: 220px;
  max-width: 260px;
  background: linear-gradient(46deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 1) 20%, #303030 52%, #303030 75%, rgba(34, 34, 34, 1) 100%);
  color: #f0f0f0;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  height: fit-content;
  position: sticky;
  top: 2rem;
  border: solid 0.2rem white;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.5rem 0.8rem;
    margin-bottom: 0.4rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #6c6c7aff;
    }
  }
`;