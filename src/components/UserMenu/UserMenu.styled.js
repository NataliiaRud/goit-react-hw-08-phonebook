import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: grey;
  &.active {
    color: blue;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  color: grey;
`;
