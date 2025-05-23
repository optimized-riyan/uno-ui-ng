import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import env from 'app/env/env';
import {
  Card,
  CardCountUpdate,
  CardSubmissionRequired,
  CardsUpdate,
  CardValidity,
  ColorChoiceRequired,
  CSPlayersSync,
  DirectionUpdate,
  GameEnded,
  GameStarted,
  InvalidAction,
  PlayerIndexSync,
  PlayerOut,
  PlayerSkipped,
  PlayerTurnUpdate,
  ServerEvent,
  ServerEventType,
  StackColorUpdate,
  StackTopUpdate,
} from 'app/shared/types';
import { AppState } from 'app/state/app.state';
import {
  playerIndexSync,
  playersSync,
  updateCardCount,
  updateCards,
  updateDirection,
  updatePlayerTurn,
  updateStackColor,
  updateStackTop,
} from 'app/state/table/table.actions';
import { selectCards } from 'app/state/table/table.selectors';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'table',
  imports: [NgFor, CardComponent, AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  lobbyId: string;
  lobbyCapacity: number;
  cards$: Observable<Card[]>;

  constructor(private router: Router, private store: Store<AppState>) {
    const state = router.getCurrentNavigation()!.extras.state as any;
    this.lobbyId = state.lobbyId;
    this.lobbyCapacity = state.lobbyCapacity;
    this.cards$ = store.select(selectCards);
  }

  ngOnInit(): void {
    const ws = webSocket<ServerEvent>(`${env.unoWssOrigin}`);
    ws.subscribe(message => {
      const data = message.data;
      switch (message.type) {
        case ServerEventType.InvalidAction:
          this.onInvalidAction(data as InvalidAction);
          break;
        case ServerEventType.PlayerIndexSync:
          this.onPlayerIndexSync(data as PlayerIndexSync);
          break;
        case ServerEventType.CSPlayersSync:
          this.onCSPlayersSync(data as CSPlayersSync);
          break;
        case ServerEventType.CardsUpdate:
          this.onCardsUpdate(data as CardsUpdate);
          break;
        case ServerEventType.StackTopUpdate:
          this.onStackTopUpdate(data as StackTopUpdate);
          break;
        case ServerEventType.StackColorUpdate:
          this.onStackColorUpdate(data as StackColorUpdate);
          break;
        case ServerEventType.CardCountUpdate:
          this.onCardCountUpdate(data as CardCountUpdate);
          break;
        case ServerEventType.DirectionUpdate:
          this.onDirectionUpdate(data as DirectionUpdate);
          break;
        case ServerEventType.PlayerTurnUpdate:
          this.onPlayerTurnUpdate(data as PlayerTurnUpdate);
          break;
        case ServerEventType.CardValidity:
          this.onCardValidity(data as CardValidity);
          break;
        case ServerEventType.GameStarted:
          this.onGameStarted(data as GameStarted);
          break;
        case ServerEventType.GameEnded:
          this.onGameEnded(data as GameEnded);
          break;
        case ServerEventType.PlayerSkipped:
          this.onPlayerSkipped(data as PlayerSkipped);
          break;
        case ServerEventType.PlayerOut:
          this.onPlayerOut(data as PlayerOut);
          break;
        case ServerEventType.CardSubmissionRequired:
          this.onCardSubmissionRequired(data as CardSubmissionRequired);
          break;
        case ServerEventType.ColorChoiceRequired:
          this.onColorChoiceRequired(data as ColorChoiceRequired);
          break;
        default:
          console.error('uncaught server event: ', message);
      }
    });
  }

  private onInvalidAction(data: InvalidAction): void {
    console.log(data);
  }

  private onPlayerIndexSync(data: PlayerIndexSync): void {
    this.store.dispatch(playerIndexSync(data));
  }

  private onCSPlayersSync(data: CSPlayersSync): void {
    this.store.dispatch(playersSync(data));
  }

  private onCardsUpdate(data: CardsUpdate): void {
    this.store.dispatch(updateCards(data));
  }

  private onStackTopUpdate(data: StackTopUpdate): void {
    this.store.dispatch(updateStackTop(data));
  }

  private onCardCountUpdate(data: CardCountUpdate): void {
    this.store.dispatch(updateCardCount(data));
  }

  private onDirectionUpdate(data: DirectionUpdate): void {
    this.store.dispatch(updateDirection(data));
  }

  private onPlayerTurnUpdate(data: PlayerTurnUpdate): void {
    this.store.dispatch(updatePlayerTurn(data));
  }

  private onStackColorUpdate(data: StackColorUpdate): void {
    this.store.dispatch(updateStackColor(data));
  }

  private onCardValidity(data: CardValidity): void {}

  private onPlayerOut(data: PlayerOut): void {}

  private onPlayerSkipped(data: PlayerSkipped): void {}

  private onGameStarted(data: GameStarted): void {}

  private onGameEnded(data: GameEnded): void {}

  private onCardSubmissionRequired(data: CardSubmissionRequired): void {}

  private onColorChoiceRequired(data: ColorChoiceRequired): void {}
}
