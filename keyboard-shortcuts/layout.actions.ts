import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ComposingMessage = '[Layout] Compose message',
  LoadingMessages = '[Layout] Load messages',
  ShortcutKeyDown = '[Layout] on shortcut key down',
}

export class LayoutComposeMessage implements Action {
  readonly type = LayoutActionTypes.ComposingMessage;

  constructor(public payload: boolean) {}
}

export class LayoutLoadMessages implements Action {
  readonly type = LayoutActionTypes.LoadingMessages;

  constructor(public payload: boolean) {}
}

export class LayoutShortcutKeyDown implements Action {
  readonly type = LayoutActionTypes.ShortcutKeyDown;

  constructor(public payload: number) {}
}

export type LayoutActions = LayoutComposeMessage | LayoutLoadMessages | LayoutShortcutKeyDown;