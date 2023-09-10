import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/depost":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.purpose,
      };
    case "account/payLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

function deposit(amount) {
  return { type: "account/depost", payload: amount };
}

function withdraw() {}

function requestLoan() {}

function payloan() {}

store.dispatch(deposit(600));
console.log(store.getState());
