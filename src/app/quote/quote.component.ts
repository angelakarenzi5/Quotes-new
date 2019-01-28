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
      "Create new quote",
      "Write down your quote here",
      new Date(2019, 3, 14)
    ),
    new Quote(
      2,
      "Author of quote",
      "Write the name of the person who wrote quote",
      new Date(2019, 6, 9)
    ),
    new Quote(
      3,
      "Upvote quote",
      "This upvote quote selection shows you liked the quote",
      new Date(2019, 1, 12)
    ),
    new Quote(
      4,
      "Downvote quote",
      "This downvote quote selection shows you disliked the quote ",
      new Date(2019, 1, 12)
    ),
    new Quote(
      5,
      "Number of Upvotes",
      "This is the total number of upvotes for this quote ",
      new Date(2019, 5, 18)
    ),
    new Quote(
      6,
      "Number of Downvotes",
      "This shows the total number of downvotes for this quote",
      new Date(2019, 3, 12)
    )
  ];
  deleteGoal(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
      }
    }
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  ngOnInit() {}
}
