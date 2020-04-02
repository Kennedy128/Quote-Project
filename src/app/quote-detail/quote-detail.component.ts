import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Input() quote: Quote
  upvotes=0;
  downvotes=0;

  upvoteCLick(){
    this.upvotes ++;
  }
  downvoteCLick (){
    this.downvotes ++;
  }
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
