import { createAction, props } from '@ngrx/store';
import { Card, CardColor, ClientSidePlayer } from 'app/shared/types';

export const playerIndexSync = createAction(
  'Player Index Sync',
  props<{ playerIndex: number }>()
);

export const playersSync = createAction(
  'Players Sync',
  props<{ players: ClientSidePlayer[] }>()
);

export const updateCards = createAction(
  'Cards Update',
  props<{ cards: Card[] }>()
);

export const updateStackTop = createAction(
  'Update Stack Top',
  props<{ card: Card }>()
);

export const updateStackColor = createAction(
  'Update Stack Color',
  props<{ color: CardColor }>()
);

export const updateDirection = createAction(
  'Update Direction',
  props<{ direction: boolean }>()
);

export const updatePlayerTurn = createAction(
  'Update Player Turn',
  props<{ index: number }>()
);
