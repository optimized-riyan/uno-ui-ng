import { createReducer, on } from '@ngrx/store';
import { TableState } from 'app/shared/types';
import {
  playerIndexSync,
  playersSync,
  updateCardCount,
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
  on(updateCardCount, (state, { count, playerIndex }) => ({
    ...state,
    players: state.players.map(player =>
      player.index === playerIndex ? { ...player, cardCount: count } : player
    ),
  })),
  on(updateStackTop, (state, { card }) => ({
    ...state,
    stackTop: card,
  })),
  on(updateStackColor, (state, { color }) => ({
    ...state,
    stackColor: color,
  })),
  on(updateDirection, (state, { isReversed }) => ({
    ...state,
    direction: isReversed,
  })),
  on(updatePlayerTurn, (state, { currentPlayerIndex }) => ({
    ...state,
    playerTurn: currentPlayerIndex,
  }))
);
