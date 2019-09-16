import { Component, OnInit, Input } from '@angular/core';
import { Deck } from 'src/app/shared/models/deck.model';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() deck: Deck;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
