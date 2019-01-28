import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'Create new quote'),
        new Quote(2,'Author of quote'),
        new Quote(3, 'Upvote quote'),
        new Quote(4, 'Downvote quote'),
        new Quote(5, 'Number of Upvotes'),
        new Quote(6, 'Number of Downvotes'),

    ]
}
