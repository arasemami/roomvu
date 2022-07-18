import * as actionType from '../actionTypes';

export const SwitchTheme = (value: any) => {
  return {
    type: actionType.SWITCH_THEME,
    value,
  };
};
