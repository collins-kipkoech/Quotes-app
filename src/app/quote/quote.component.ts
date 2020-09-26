import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title='Quotes App'
  quotes:Quote[] = [
    new Quote('coding is good','steve jobs','collins',new Date()),
    new Quote('coding is good','steve jobs','collins', new Date(2020,9,25))
  ];
  toggleDetails(index){
    this.quotes[index].showMessage = !this.quotes[index].showMessage;
    
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
