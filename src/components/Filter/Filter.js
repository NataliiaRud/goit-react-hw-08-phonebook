import React from 'react';
import { setFilter } from 'redux/Contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/selectors';

import { FilterContainer, FilterInput, Title, Wraper } from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <FilterContainer>
      <Wraper>
        <Title>Find contacts by name</Title>

        <FilterInput
          type="text"
          value={filter}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Wraper>
    </FilterContainer>
  );
};
