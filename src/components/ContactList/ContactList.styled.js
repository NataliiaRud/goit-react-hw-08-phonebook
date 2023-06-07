import styled from '@emotion/styled';
export const ContactContainer = styled.div`
  padding: 15px;
  width: 500px;
  margin-bottom: 15px;
`;
export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  padding: 8px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
  width: 500px;

  justify-content: space-between;
`;

export const Btn = styled.button`
  min-width: 100px;
  padding: 2px 32px;
  background-color: fff;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: #ffc0cb;
  }
`;
