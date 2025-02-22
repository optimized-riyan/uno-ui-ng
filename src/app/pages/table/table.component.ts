import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import env from 'app/env/env';
import {
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
import { filter, map } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  lobbyId: string;
  lobbyCapacity: number;

  constructor(private router: Router) {
    const state = router.getCurrentNavigation()!.extras.state as any;
    this.lobbyId = state.lobbyId;
    this.lobbyCapacity = state.lobbyCapacity;
  }

  ngOnInit(): void {
    const ws = webSocket<ServerEvent>(`${env.unoWssOrigin}`);
    this.subsBeforeCSPlayerSync(ws);
  }

  private subsBeforeCSPlayerSync(ws: WebSocketSubject<ServerEvent>): void {
    ws.pipe(
      filter(message => message.type === ServerEventType.InvalidAction),
      map(message => message.data as InvalidAction)
    ).subscribe(this.onInvalidAction);
    ws.pipe(
      filter(message => message.type === ServerEventType.PlayerIndexSync),
      map(message => message.data as PlayerIndexSync)
    ).subscribe(this.onPlayerIndexSync);
    ws.pipe(
      filter(message => message.type === ServerEventType.GameStarted),
      map(message => message.data as GameStarted)
    ).subscribe(this.onGameStarted);
    ws.pipe(
      filter(message => message.type === ServerEventType.StackTopUpdate),
      map(message => message.data as StackTopUpdate)
    ).subscribe(this.onStackTopUpdate);
    ws.pipe(
      filter(message => message.type === ServerEventType.PlayerTurnUpdate),
      map(message => message.data as PlayerTurnUpdate)
    ).subscribe(this.onPlayerTurnUpdate);
    ws.pipe(
      filter(message => message.type === ServerEventType.CSPlayersSync),
      map(message => message.data as CSPlayersSync)
    ).subscribe(this.onCSPlayersSync);
  }

  private subsAfterCSPlayersSync(ws: WebSocketSubject<ServerEvent>): void {}

  private onInvalidAction(data: InvalidAction): void {
    console.log(data);
  }

  private onPlayerIndexSync(data: PlayerIndexSync): void {}

  private onCSPlayersSync(data: CSPlayersSync): void {}

  private onCardsUpdate(data: CardsUpdate): void {}

  private onStackTopUpdate(data: StackTopUpdate): void {}

  private onCardCountUpdate(data: CardCountUpdate): void {}

  private onDirectionUpdate(data: DirectionUpdate): void {}

  private onPlayerTurnUpdate(data: PlayerTurnUpdate): void {}

  private onStackColorUpdate(data: StackColorUpdate): void {}

  private onCardValidity(data: CardValidity): void {}

  private onPlayerOut(data: PlayerOut): void {}

  private onPlayerSkipped(data: PlayerSkipped): void {}

  private onGameStarted(data: GameStarted): void {}

  private onGameEnded(data: GameEnded): void {}

  private onCardSubmissionRequired(data: CardSubmissionRequired): void {}

  private onColorChoiceRequired(data: ColorChoiceRequired): void {}
}
