export class Quote {
    public upvotes: number;
    public downvotes:number;
  public showAuthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public completeDate: Date
  ) {
    this.upvotes=0;
    this.downvotes=0;
    this.showAuthor = false;
  }
}
