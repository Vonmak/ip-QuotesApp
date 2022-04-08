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

  addNewQuote(quote:any){
    let qLength = this.quotes.length;
    quote.id = qLength+1;
    quote.creationDate=new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  details(index:number){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }

  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].theQuote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
