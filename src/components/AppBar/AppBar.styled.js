import styled from '@emotion/styled';
import { NavLink as StyledLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
  border-bottom: solid blue 2px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: flex-end;
`;
export const Item = styled.li`
  display: flex;
  gap: 8px;
  list-style: none;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
`;
export const LayoutLink = styled(StyledLink)`
  text-decoration: none;
  color: grey;

  &.active {
    color: red;
  }
`;
