import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  Quotes: string[];

  constructor() {
    this.Quotes = ["Create new quote","Author of quote", "Upvote quote", "Downvote quote", "Number of upvotes and number of downvotes"];
  }
}
