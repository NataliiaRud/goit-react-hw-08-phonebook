// import styled from 'styled-components';
import styled from '@emotion/styled';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  gap: 12px;
  max-width: 100%;
  width: 500px;
  padding: 15px;
  background-color: #ffefd5;
`;
export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
`;

export const Field = styled(FormikField)`
  margin-bottom: 24px;
  width: 400px;
`;
export const Button = styled.button`
  width: 100px;
  color: red;
`;
