import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter-action';

export const intialState = 0;

export const __counterReducer = createReducer(
  intialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return __counterReducer(state, action);
}
