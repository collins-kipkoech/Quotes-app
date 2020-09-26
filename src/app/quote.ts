export class Quote {
    showMessage: boolean;
    showAuthor: boolean;
    constructor(public quote_message: string,public Author: string,public name: string, public completeDate: Date){
      this.showMessage=false;
      this.showAuthor=false;
    }
  }