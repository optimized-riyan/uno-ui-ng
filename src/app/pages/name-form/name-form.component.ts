import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'name-form',
  imports: [FormsModule],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.scss',
})
export class NameFormComponent {
  name: string = '';

  constructor(private router: Router) {}

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    localStorage.setItem('name', this.name);
    this.router.navigate(['/menu']);
  }
}
