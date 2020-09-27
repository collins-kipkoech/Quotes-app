export class Quote {
    showMessage: boolean;
    showAuthor: boolean;
    constructor(public quote_message: string,public Author: string){
      this.showMessage=false;
      this.showAuthor=false;
    }
  }