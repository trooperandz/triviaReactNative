import React from 'react';
import { Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Button';
import { setGlobalError } from 'features/app/appSlice';
import { AppSliceState } from 'features/app/appSlice/types';
import * as S from './styles';

const { styles } = S;

export const ERROR_MODAL_TEST_ID = 'error-modal';

export default () => {
  const error = useSelector((state: AppSliceState) => state.app.error);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setGlobalError(''));

  if (!error) {
    return null;
  }

  return (
    <Modal animationType="slide" transparent={true}>
      <S.Container testID={ERROR_MODAL_TEST_ID}>
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
