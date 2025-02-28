import { createAction, props } from '@ngrx/store';
import {
  CardCountUpdate,
  CardsUpdate,
  CSPlayersSync,
  DirectionUpdate,
  PlayerIndexSync,
  PlayerTurnUpdate,
  StackColorUpdate,
  StackTopUpdate,
} from 'app/shared/types';

export const playerIndexSync = createAction(
  'Player Index Sync',
  props<PlayerIndexSync>()
);

export const playersSync = createAction('Players Sync', props<CSPlayersSync>());

export const updateCards = createAction('Cards Update', props<CardsUpdate>());

export const updateCardCount = createAction(
  'Card Count Update',
  props<CardCountUpdate>()
);

export const updateStackTop = createAction(
  'Update Stack Top',
  props<StackTopUpdate>()
);

export const updateStackColor = createAction(
  'Update Stack Color',
  props<StackColorUpdate>()
);

export const updateDirection = createAction(
  'Update Direction',
  props<DirectionUpdate>()
);

export const updatePlayerTurn = createAction(
  'Update Player Turn',
  props<PlayerTurnUpdate>()
);
