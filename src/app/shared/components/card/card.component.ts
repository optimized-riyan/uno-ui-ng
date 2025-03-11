import { Component, Input } from '@angular/core';
import { Card } from 'app/shared/types';
import cardUrl from 'app/shared/utils/cardUrl.util';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) card!: Card;
  src: string;

  constructor() {
    this.src = cardUrl(this.card);
  }
}
