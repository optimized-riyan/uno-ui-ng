import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  lobbyId: string;
  lobbyCapacity: number;

  constructor(private router: Router) {
    const state = router.getCurrentNavigation()!.extras.state as any;
    this.lobbyId = state.lobbyId;
    this.lobbyCapacity = state.lobbyCapacity;
  }
}
