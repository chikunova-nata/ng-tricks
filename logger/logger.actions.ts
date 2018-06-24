import { Action } from '@ngrx/store';

export const LOG_ERROR = '[Logger] Log Error';
export const LOG_WARNING = '[Logger] Log Warning';
export const LOG_INFO = '[Logger] Log Info';

export class LogError implements Action {
  readonly type = LOG_ERROR;
  constructor(public payload: { message: string }) { }
}

export class LogWarning implements Action {
  readonly type = LOG_WARNING;
  constructor(public payload: { message: string }) { }
}

export class LogInfo implements Action {
  readonly type = LOG_INFO;
  constructor(public payload: { message: string }) { }
}

export type LoggerActions = LogError | LogWarning | LogInfo;