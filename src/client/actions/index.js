/* @flow */
import fetch from "isomorphic-fetch";
import {
  INCREMENT,
  DECREMENT,
  FETCHING_GITHUB_USERS,
  FETCHED_GITHUB_USERS,
  FETCH_GITHUB_USERS_FAIL
} from "../constants";

type IncrementAction = { type: INCREMENT };
type DecrementAction = { type: DECREMENT };
type FetchingGithubUsers = { type: FETCHING_GITHUB_USERS, payload: object };
type FetchedGithubUsers = { type: FETCHED_GITHUB_USERS, payload: object };
type FetchGithubUsersFail = { type: FETCH_GITHUB_USERS_FAIL, payload: object};

type Action = 
  | IncrementAction
  | DecrementAction
  | FetchingGithubUsers
  | FetchedGithubUsers
  | FetchGithubUsersFail

type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;

export function incrementCounter(): IncrementAction {
  return {
    type: INCREMENT
  };
}

export function decrementCounter(): DecrementAction {
  return {
    type: DECREMENT
  };
}

export function fetchingGithubUsers(): FetchingGithubUsers {
  return {
    type: FETCHING_GITHUB_USERS,
    payload: {}
  };
}
export function fetchedGithubUsers(data: object): FetchedGithubUsers {
  return {
    type: FETCHED_GITHUB_USERS,
    payload: {
      data
    }
  };
}
export function fetchGithubUsersFail(error: object): FetchGithubUsersFail {
  return {
    type: FETCH_GITHUB_USERS_FAIL,
    payload: {
      error
    }
  };
}

export function fetchGithubUsers(): ThunkAction {
  return (dispatch, getState) => {
    const state = getState();
    if (state.githubUsers.data) {
      return;
    }
    dispatch(fetchingGithubUsers());
    return fetch("https://api.github.com/users")
      .then(data => data.json())
      .then(data => {
        return dispatch(fetchedGithubUsers(data));
      })
      .catch(error => {
        return dispatch(fetchGithubUsersFail(error));
      });
  };
}
