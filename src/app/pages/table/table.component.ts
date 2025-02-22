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
import { webSocket } from 'rxjs/webSocket';

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
    const ws = webSocket(`${env.unoWssOrigin}`).pipe(
      map(message => message as ServerEvent)
    );
    ws.pipe(
      filter(message => message.type === ServerEventType.InvalidAction),
      map(message => message.data as InvalidAction)
    ).subscribe(this.onInvalidAction);
    ws.pipe(
      filter(message => message.type === ServerEventType.PlayerIndexSync),
      map(message => message.data as PlayerIndexSync)
    ).subscribe(this.onPlayerIndexSync);
  }

  onInvalidAction(data: InvalidAction): void {
    console.log(data);
  }

  onPlayerIndexSync(data: PlayerIndexSync): void {}

  onCSPlayersSync(data: CSPlayersSync): void {}

  onCardsUpdate(data: CardsUpdate): void {}

  onStackTopUpdate(data: StackTopUpdate): void {}

  onCardCountUpdate(data: CardCountUpdate): void {}

  onDirectionUpdate(data: DirectionUpdate): void {}

  onPlayerTurnUpdate(data: PlayerTurnUpdate): void {}

  onStackColorUpdate(data: StackColorUpdate): void {}

  onCardValidity(data: CardValidity): void {}

  onPlayerOut(data: PlayerOut): void {}

  onPlayerSkipped(data: PlayerSkipped): void {}

  onGameStarted(data: GameStarted): void {}

  onGameEnded(data: GameEnded): void {}

  onCardSubmissionRequired(data: CardSubmissionRequired): void {}

  onColorChoiceRequired(data: ColorChoiceRequired): void {}
}
