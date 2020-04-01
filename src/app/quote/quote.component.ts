import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'life is what happens when you are busy making plans written by Diana from Linklon',description:'written by Diana from Linklon'},
    {id:2,name:'You know you are inlove when you cant fall asleep because reality is finally better than your dreams written by Dr Sue Germany',description:'written by Dr Sue Germany'},
    {id:3,name:'Get busy living or get busy dying written by Mark Caine',description:'written by Mark Claine'},
    {id:4,name:'twenty years from now you will be more disappointed by the things that you didnt do than the things you did written by Mark Twain',description:'written by Mark Twain'},
    {id:5,name:'great minds discuss ideas,avarage mind discuss events and small minds discuss people written by Eleanor Roosevelt',description:'written by Eleanor Roosevelt'},
    {id:6,name:'God is the way ,the truth,and the life whoever believes in him shall inherit the kingdom believed by Kennedy Mbithi',description:'believed by Kennedy Mbithi'},
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
