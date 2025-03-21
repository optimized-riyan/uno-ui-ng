import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import env from 'app/env/env';

@Component({
  selector: 'menu',
  imports: [FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  lobbyId: string = '';
  lobbyCapacity: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  onJoinSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.http
      .post<{
        lobbyId: string;
        lobbyCapacity: number;
      }>(
        `${env.unoOrigin}/api/join`,
        {
          lobbyId: this.lobbyId,
          name: localStorage.getItem('name'),
        },
        { withCredentials: true }
      )
      .subscribe({
        next: response => {
          this.router.navigate(['/table'], {
            state: {
              lobbyId: response.lobbyId,
              lobbyCapacity: response.lobbyCapacity,
            },
          });
        },
        error: err => console.log(err),
      });
  }

  onHostSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.http
      .post<{
        lobbyId: string;
      }>(
        `${env.unoOrigin}/api/host`,
        {
          hostname: localStorage.getItem('name'),
          playerCount: this.lobbyCapacity,
        },
        { withCredentials: true }
      )
      .subscribe({
        next: response => {
          this.router.navigate(['/table'], {
            state: {
              lobbyId: response.lobbyId,
              lobbyCapacity: this.lobbyCapacity,
            },
          });
        },
        error: err => console.log(err),
      });
  }
}
