import { Card } from '../models/card.model'

export class Deck {
  public cover: string;
  public name: string;
  public cards: Card[];
  constructor(cover: string, name: string, cards: Card[]) {
    this.cover = cover;
    this.name = name;
    this.cards = cards;
  }
}