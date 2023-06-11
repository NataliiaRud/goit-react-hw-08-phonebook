// import styled from 'styled-components';
import styled from '@emotion/styled';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 4px;
  max-width: 100%;
  padding: 15px;
`;
export const Field = styled(FormikField)`
  margin-bottom: 14px;
  width: 300px;
  height: 40px;
  background color: blue;
border-radius: 5px;
background-color: #EDF2F7;
padding: 8px;
`;
