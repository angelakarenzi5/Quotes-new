export class Quote {
  public showAuthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public completeDate: Date,
    public submitted: string
  ) {
    this.showAuthor = false;
  }
}
