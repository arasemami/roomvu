import * as actionType from '../actionTypes';
import useLocalStorage from "use-local-storage";

 
const initialState = { theme: 'light' };
export const theme = (state = initialState, { type, value = 'light' }: any) => {

  switch (type) {
    case actionType.SWITCH_THEME:
      return {
        theme: value,
      };
    default:
      return state;
  }
};
