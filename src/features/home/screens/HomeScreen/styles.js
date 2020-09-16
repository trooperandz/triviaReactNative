import styled from 'styled-components/native';

export const FormLabel = styled.Text`
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Spacer = styled.View.attrs((props) => ({
  size: props.size,
}))`
  margin: ${(props) => props.size}px 0;
`;
