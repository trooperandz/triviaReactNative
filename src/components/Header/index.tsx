import React from 'react';

import * as S from './styles';

const { styles } = S;

export const Header = () => {
  return (
    <S.Container style={styles.header}>
      <S.Heading>TriviaCraze</S.Heading>
    </S.Container>
  );
};
