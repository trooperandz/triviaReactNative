import styled from 'styled-components/native';

export const NameInput = styled.TextInput.attrs((props) => ({
  hasError: props.hasError,
}))`
  background-color: #f9f9f9;
  padding: 0px 16px;
  height: 40px;
  border-bottom-color: ${(props) => (props.hasError ? '#cc4b37' : '#bfbfbf')};
  border-bottom-width: ${(props) => (props.hasError ? '1px' : '1px')};
  font-size: 18px;
`;
