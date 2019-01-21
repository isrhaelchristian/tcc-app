import {
  createActions,
  createReducer
} from "reduxsauce";

export const {
  Types,
  Creators
} = createActions({
  loginUser: ["id", "username", "password"],
});

const INITIAL_STATE = [];

const login = (state = INITIAL_STATE, action) => [
  ...state,
  {
    id: Math.random(),
    username: action.username,
    password: action.password
  }
];

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER]: login,
});