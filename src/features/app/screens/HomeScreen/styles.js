import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const FormLabel = styled.Text`
  margin-bottom: 12px;
  font-size: 16px;
`;

export const Spacer = styled.View.attrs((props) => ({
  size: props.size,
}))`
  margin: ${(props) => props.size}px 0;
`;

export const Spinner = styled.ActivityIndicator`
  margin-top: 8px;
`;

export const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  button: {
    borderRadius: 24,
    width: 240,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
