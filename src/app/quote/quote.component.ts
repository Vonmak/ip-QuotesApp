import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Susan Nyabuto', 'Shughuli ni Mingi Masaa ndio Machache.', new Date(2022,4,7)),
    new Quote(2, 'Buy cookies', 'I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quote(3, 'Get a new phone case','Diana has her birthday coming up soon',new Date(2022,1,12)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
