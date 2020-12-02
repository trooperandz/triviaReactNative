import React from 'react';
import { Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { setGlobalError } from '../../features/app/appSlice';
import * as S from './styles';

const { styles } = S;

export default () => {
  const error = useSelector((state: any) => state.app.error);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setGlobalError(''));

  if (!error) {
    return null;
  } else {
    console.log('should show error');
  }

  return (
    <Modal animationType="slide" transparent={true}>
      <S.Container>
        <S.Alert style={styles.alert}>
          <S.AlertText>{error}</S.AlertText>
          <Button type="primary" onPress={handleClose} style={styles.button}>
            Okay
          </Button>
        </S.Alert>
      </S.Container>
    </Modal>
  );
};
