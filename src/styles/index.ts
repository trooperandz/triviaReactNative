import styled from 'styled-components/native';

import colors from 'styles/colors';

export const ScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  background-color: ${colors.backgroundPrimary};
`;

export const Heading = styled.Text`
  align-self: center;
  font-size: 20px;
  padding: 0 0 24px;
  color: ${colors.textTertiary};
`;
