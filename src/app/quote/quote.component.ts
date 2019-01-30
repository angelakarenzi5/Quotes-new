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
      new Date(2019, 3, 14), ''
    ),
    new Quote(
      2,
      "An investment in knowledge pays the best interest.",
      "Benjamin Franklin",
      new Date(2019, 6, 9), ''
    ),
    new Quote(
      3,
      "Education is not preparation for life; education is life itself.",
      "John Dewey",
      new Date(2019, 1, 12)
    , ''),
    new Quote(
      4,
      "Develop a passion for learning. If you do, you will never cease to grow",
      "Anthony J.D'Angelo",
      new Date(2019, 1, 12), ''
    ),
    new Quote(
      5,
      "The roots of education are bitter, but the fruit is sweet.",
      "Aristotle",
      new Date(2019, 5, 18), ''
    ),
    new Quote(
      6,
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      "Malcom X",
      new Date(2019, 3, 12), ''
    )
  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  ngOnInit() {}
}
