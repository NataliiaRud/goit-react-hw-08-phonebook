import { NavLink as StyledLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(StyledLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: grey;
  &.active {
    color: red;
  }
`;
