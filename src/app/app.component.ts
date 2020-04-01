import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'life is what happens when you are busy making other plans written by Diana from Linklon', 'written by Diana from LInklon',new Date(2020,3,1)),
    new Quote(2,'you know you are inlove when you cant fall asleep because reality is finally better than your dreams written by Dr sue Germany','written by DR sue Germany',new Date(2020,3,1)),
    new Quote(3,'Get busy living or get busy dying written by Mark Caine','written by Mark Caine',new Date(2020,3,1)),
    new Quote(4,'twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did written by Mark Caine','written by Mark Caine',new Date(2020,3,1)),
    new Quote(5,'great minds discuss ideas,avarage minds discuss events and small minds discuss people by Eleanor Roosevelt','written by Eleanor Roosevelt',new Date(2020,3,1)),
    new Quote(6,'God is the way the truth and the life and whoever believes in Him shall inherit the kingdom of heaven believed by Kennedy Mbithi','believed by Kennedy Mbithi',new Date(2020,3,1)),
    

   
  ];
 
  
}
