import { Action } from '@ngrx/store';

export interface IProfileActions {
  PROFILE_DATA_UPDATED: string;
}

export const ActionTypes: IProfileActions = {
  PROFILE_DATA_UPDATED: 'Profile Data Updated',
};

export class UpdateAction implements Action {
  type = ActionTypes.PROFILE_DATA_UPDATED;
  constructor(public payload: IProfileData) { }
}

export type Actions = UpdateAction;