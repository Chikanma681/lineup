import { combineReducers } from "redux";
import { actionTypes } from "../types/types";

const initialState = {
  email: "",
  password: "",
  name: "",
  description: "",
  address: "",
};

const { GET_ITEMS } = actionTypes;

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        email: "",
        password: "",
        name: "",
        description: "",
        address: "",
      };
  }
};

const reducers = combineReducers({});

export default reducers;
