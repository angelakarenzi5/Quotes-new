import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
      new Quote(1,'Create new quote', 'Write down your quote here'),
      new Quote(2,'Author of quote', 'Write the name of the person who wrote quote'),
      new Quote(3, 'Upvote quote', 'This upvote quote selection shows you liked the quote'),
      new Quote(4, 'Downvote quote', 'This downvote quote selection shows you disliked the quote '),
      new Quote(5, 'Number of Upvotes', 'This is the total number of upvotes for this quote '),
      new Quote(6, 'Number of Downvotes', 'This shows the total number of downvotes for this quote'),

    ]
}
