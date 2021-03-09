import styled from 'styled-components/native';

import colors from 'styles/colors';

export const RadioWrapper = styled.View`
  height: 40px;
  border-color: ${colors.borderPrimary};
  border-bottom-width: 1px;
  justify-content: center;
`;

export const RadioWithLabel = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const RadioLabel = styled.Text`
  margin-left: 16px;
  color: ${colors.textSecondary};
`;
