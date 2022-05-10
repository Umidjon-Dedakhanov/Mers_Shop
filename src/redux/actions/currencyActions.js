import { CURRENCY_CHANGE } from "./types";

export const currency_change = (currency_type) => async dispatch =>  {
  dispatch({
    type: CURRENCY_CHANGE,
    payload: {
      currency_type
    }
  })
}