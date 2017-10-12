/* @flow */
import {
  FETCHING_GITHUB_USERS,
  FETCHED_GITHUB_USERS,
  FETCH_GITHUB_USERS_FAIL
} from "../constants";

const initialStates= {
  isLoading: false,
  data: null,
  error: null
}

export default function githubUsers(state: State = initialStates, action: Action): State {
  switch (action.type) {
    case FETCHING_GITHUB_USERS:
      return {
        isLoading: true,
        error: null,
        data: null
      };
    case FETCHED_GITHUB_USERS:
      return {
        isLoading: false,
        error: null,
        data: action.payload.data
      };
    case FETCH_GITHUB_USERS_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.payload.error
      };
    default:
      return state;
  }
}
