import { combineReducers } from "redux";
import { actionTypes } from "../types/types";

const initialState = {
  email: "",
  password: "",
  name: "",
  description: "",
  address: "",
};

const { GET_EMAIL, GET_PASSWORD, GET_DESCRIPTION, GET_ADDRESS, GET_NAME } =
  actionTypes;

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case GET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case GET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
  }
};

const reducers = combineReducers({
  form: formReducer,
});

export default reducers;
