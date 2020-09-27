export class Quote {
    showMessage: boolean;
    
    constructor(public quote_message: string,public author: string,public name: string, public completeDate:Date, public time:Date){
      this.showMessage=false;
      
    }
  }