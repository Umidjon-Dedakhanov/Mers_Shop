import { CURRENCY_CHANGE } from "../actions/types";

const initialState = {
  currency: "usd"
}

const currencyReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case CURRENCY_CHANGE:
      return{
        ...state,
        currency: payload?.currency_type
      }
    default: 
      return state
  }
}

export default currencyReducer;