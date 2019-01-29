import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      "Education is the most powerful weapon which you can use to change the world.",
      "Nelson Mandela",
      new Date(2019, 3, 14)
    ),
    new Quote(
      2,
      "An investment in knowledge pays the best interest.",
      "Benjamin Franklin",
      new Date(2019, 6, 9)
    ),
    new Quote(
      3,
      "Education is not preparation for life; education is life itself.",
      "John Dewey",
      new Date(2019, 1, 12)
    ),
    new Quote(
      4,
      "Develop a passion for learning. If you do, you will never cease to grow",
      "Anthony J.D'Angelo",
      new Date(2019, 1, 12)
    ),
    new Quote(
      5,
      "The roots of education are bitter, but the fruit is sweet.",
      "Aristotle",
      new Date(2019, 5, 18)
    ),
    new Quote(
      6,
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      "Malcom X",
      new Date(2019, 3, 12)
    )
  ];
];
number: number;
number1: number;
counter: number;

addQuote(emittedQuote) {
    this.quotes.push(emittedQuote);
}
toogleDetails(y) {
    this.quotes.splice(y, 1);
}

upvote(i) {
    this.quotes[i].upvotes += 1;
}
downvote(i) {
    this.quotes[i].downvotes += 1;
}
delQuote(i) {
    this.quotes.splice(i, 1);
}
highestUpvote() {
    this.number = 0;
    this.number1 = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
        this.number1 = this.quotes[this.counter].upvotes;
        if (this.number1 > this.number) {
            this.number = this.number1;
        }
    }
    return this.number1;
}
constructor() {}

ngOnInit() {}
}