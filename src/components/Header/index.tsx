import React from 'react';
import { Icon } from 'react-native-eva-icons';

import { HeaderProps } from './types';
import * as S from './styles';
import colors from 'styles/colors';

const { styles } = S;

export const BACK_ICON_TEST_ID = 'back-icon';

const LeftChevronIcon = () => (
  <Icon
    name="chevron-left-outline"
    width={32}
    height={32}
    fill={colors.onSurfacePrimary}
  />
);

export const Header = (props: HeaderProps) => {
  const { backOption, onPress } = props;

  return (
    <S.Container style={styles.header}>
      {backOption ? (
        <S.BackIcon testID={BACK_ICON_TEST_ID} onPress={onPress}>
          <LeftChevronIcon />
        </S.BackIcon>
      ) : null}
      <S.Heading>TriviaCraze</S.Heading>
    </S.Container>
  );
};
