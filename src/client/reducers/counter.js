/* @flow */
import { INCREMENT, DECREMENT } from "../constants";

export default function counter(state: State = 0, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
