import { createReducer, on } from '@ngrx/store';
import { TableState } from 'app/shared/types';
import {
  playerIndexSync,
  playersSync,
  updateCards,
  updateDirection,
  updatePlayerTurn,
  updateStackColor,
  updateStackTop,
} from './table.actions';

export const tableReducer = createReducer(
  {} as TableState,
  on(playerIndexSync, (state, { playerIndex }) => ({
    ...state,
    playerIndex,
  })),
  on(playersSync, (state, { players }) => ({
    ...state,
    players,
  })),
  on(updateCards, (state, { cards }) => ({
    ...state,
    cards,
  })),
  on(updateStackTop, (state, { card }) => ({
    ...state,
    stackTop: card,
  })),
  on(updateStackColor, (state, { color }) => ({
    ...state,
    stackColor: color,
  })),
  on(updateDirection, (state, { direction }) => ({
    ...state,
    direction,
  })),
  on(updatePlayerTurn, (state, { index }) => ({
    ...state,
    playerTurn: index,
  }))
);
