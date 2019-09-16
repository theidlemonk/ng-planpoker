import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Deck } from 'src/app/shared/models/deck.model';
import { DecksService } from 'src/app/shared/services/decks.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  name: string;
  deck: Deck

  constructor(private router: Router, private route: ActivatedRoute, private decksService: DecksService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params.name;
          console.log(this.name);
          this.deck = this.getDeck(this.name);
        }
      );
  }

  getDeck(name: string) {
    return this.decksService.getDeck(name);
  }

}
