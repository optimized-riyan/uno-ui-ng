import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectTable = (state: AppState) => state.table;

export const selectPlayerIndex = createSelector(
  selectTable,
  table => table.playerIndex
);
export const selectPlayers = createSelector(
  selectTable,
  table => table.players
);
export const selectCards = createSelector(selectTable, table => table.cards);
export const selectStackTop = createSelector(
  selectTable,
  table => table.stackTop
);
export const selectStackColor = createSelector(
  selectTable,
  table => table.stackColor
);
export const selectDirection = createSelector(
  selectTable,
  table => table.direction
);
export const selectPlayerTurn = createSelector(
  selectTable,
  table => table.playerTurn
);
