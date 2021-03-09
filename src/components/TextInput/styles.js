import styled from 'styled-components/native';

import colors from 'styles/colors';

export const NameInput = styled.TextInput.attrs((props) => ({
  hasError: props.hasError,
}))`
  background-color: ${colors.backgroundSecondary};
  padding: 0px 16px;
  height: 40px;
  border-bottom-color: ${(props) =>
    props.hasError ? colors.errorPrimary : colors.borderPrimary};
  border-bottom-width: ${(props) => (props.hasError ? '1px' : '1px')};
  font-size: 18px;
  color: ${colors.textSecondary};
`;
