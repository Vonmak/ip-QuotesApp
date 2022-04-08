import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {

numberOfUpVotes:number =0;
numberOfDownVotes:number =0;


upVote(){
  this.numberOfUpVotes++;
}

downVote(){
  this.numberOfDownVotes++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
