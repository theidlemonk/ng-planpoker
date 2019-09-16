import { Injectable } from '@angular/core';
import { Deck } from "../models/deck.model";
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class DecksService {
  private fibbonacci: Card[] = [
    new Card('0'),
    new Card('1'),
    new Card('2'),
    new Card('3'),
    new Card('5'),
    new Card('8'),
    new Card('13'),
    new Card('21'),
    new Card('34'),
    new Card('55'),
    new Card('89'),
    new Card('144'),
    new Card('too big'),
    new Card('?'),
    new Card('break')
  ];
  private tshirt: Card[] = [
    new Card('XS'),
    new Card('S'),
    new Card('M'),
    new Card('L'),
    new Card('XL'),
    new Card('XXL'),
    new Card('too big'),
    new Card('?'),
    new Card('break')
  ];
  private decks: Deck[] = [
    new Deck('Fibbonacci', 'fibo', this.fibbonacci),
    new Deck('T-shirt Sizes', 'tshirt', this.tshirt), 
  ];
  constructor() { }

  getAll () {
    return this.decks;
  }

  getDeck(name: string): Deck {
    return this.getAll().find(deck => deck.name === name);
  }
}
