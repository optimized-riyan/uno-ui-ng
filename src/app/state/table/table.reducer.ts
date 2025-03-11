import { createReducer, on } from '@ngrx/store';
import {
  Card,
  CardColor,
  CardValue,
  ClientSidePlayer,
  TableState,
} from 'app/shared/types';
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

const initialTableState: TableState = {
  cards: [] as Card[],
  direction: true,
  playerIndex: 0,
  players: [] as ClientSidePlayer[],
  playerTurn: 0,
  stackColor: CardColor.Blue,
  stackTop: { color: CardColor.Blue, value: CardValue.Zero } as Card,
};

export const tableReducer = createReducer(
  initialTableState,
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
