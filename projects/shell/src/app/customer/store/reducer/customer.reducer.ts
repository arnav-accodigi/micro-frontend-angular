import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import {Customer} from '../../../models/customer';

export const customerFeatureKey = 'customer';

// export interface State {

// }

// export const initialState: State = {

// };

// export const reducer = createReducer(
//   initialState,

// );

export interface CustomerState {
    customers: Customer[];
}
  export const initialState: CustomerState = {
    customers: []
  };
  export const customerReducer = createReducer(
    initialState,
    on(CustomerActions.addCustomer,
      (state: CustomerState, {customer}) =>
        ({...state,
          customers: [...state.customers, customer]
        }))
  );
  export function reducer(state: CustomerState | undefined, action: Action): any {
    return customerReducer(state, action);
  }