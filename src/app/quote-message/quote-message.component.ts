
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVoteCount: number = 0;
  clickCount_upVote(): void{
    this.upVoteCount++
  }

    downVoteCount: number = 0;
    clickCount_downVote(): void{
      this.downVoteCount++
    }
  constructor() { }

  ngOnInit(): void {
  }

}
