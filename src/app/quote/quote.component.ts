import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Susan Nyabuto', 'Shughuli ni Mingi Masaa ndio Machache.', new Date(2022,3,7)),
    new Quote(2, 'Nelson Mandela', 'The greatest glory in living lies not in never falling, but in rising every time we fall. ',new Date(1994,0,1)),
    new Quote(3, 'Steve Jobs',"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",new Date(2015,1,12)),
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
