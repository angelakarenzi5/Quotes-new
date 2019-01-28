import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  Quotes: string[];

  constructor() {
    this.Quotes = ["Create new quote", "Upvote quote", "Downvote quote"];
  }
}
