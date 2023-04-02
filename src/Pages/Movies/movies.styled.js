import styled from 'styled-components';

/* Стилі для форми */
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-width: 500px;
`;
/* Стилі для label */
export const Label = styled.label`
  margin-right: 10px;
`;
/* Стилі для інпуту */

export const Input = styled.input`
  margin-right: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #3e8e41;
  }
`;
