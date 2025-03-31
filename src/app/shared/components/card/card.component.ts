import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'app/shared/types';
import cardUrl from 'app/shared/utils/cardUrl.util';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) card!: Card;
  src!: string;

  ngOnInit(): void {
    this.src = cardUrl(this.card);
  }
}
