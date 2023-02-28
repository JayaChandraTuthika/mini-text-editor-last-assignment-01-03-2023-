import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`
export const StyledText = styled.textarea`
  background-color: transparent;
  height: 100%;
  border-radius: 10px;
  font-size: 17px;

  border: none;
  outline: none;
  padding: 25px;
  color: #cbd5e1;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
