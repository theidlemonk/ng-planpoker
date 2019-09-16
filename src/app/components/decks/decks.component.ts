import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../shared/services/decks.service'
import { Deck } from '../../shared/models/deck.model';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {
  decks: Deck[];

  constructor(private decksService: DecksService) { }

  ngOnInit() {
    this.decks = this.decksService.getAll();
  }

}
