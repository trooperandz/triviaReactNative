import reducer, {
  clearAppSliceState,
  setGlobalError,
  setUserName,
} from '../index';

describe('appSlice reducers', () => {
  it('should clear the app state correctly', () => {
    const nextState = reducer(
      {
        error: 'test error',
        userName: 'test userName',
      },
      clearAppSliceState(),
    );

    expect(nextState).toEqual({ error: '', userName: '' });
  });

  it('should update the user name correctly', () => {
    const state = {
      userName: '',
    };
    const nextState = reducer(state, setUserName({ userName: 'Matt' }));

    expect(nextState).toEqual({ userName: 'Matt' });
  });

  it('should set the global error correctly', () => {
    const state = { error: '' };
    const nextState = reducer(state, setGlobalError('Test error'));

    expect(nextState).toEqual({ error: 'Test error' });
  });
});
