import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 45,
    borderRadius: 8,
    marginBottom: 50,
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  primaryBorder: {
    borderColor: colors.buttonPrimary,
  },
  secondaryBorder: {
    borderColor: colors.buttonSecondary,
  },
  primaryBackground: {
    backgroundColor: colors.buttonPrimary,
  },
  secondaryBackground: {
    backgroundColor: colors.buttonSecondary,
  },
  primaryText: {
    color: colors.onButtonPrimary,
  },
  secondaryText: {
    color: colors.onButtonSecondary,
  },
});
