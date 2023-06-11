import styled from '@emotion/styled';
export const ContactContainer = styled.div`
  padding: 8px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.p`
  color: teal;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
`;
export const Item = styled.li`
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  background-color: #edf2f7;
  width: 600px;
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
  background-color: #edf2f7;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: #318ce7;
  }
`;
