export class Quote {

    showDetails:boolean;

    constructor(
        public id:number,
        public authorName: string, 
        public theQuote: string,
        public creationDate: Date,

    ){
        this.showDetails=false;
    }
    
}
