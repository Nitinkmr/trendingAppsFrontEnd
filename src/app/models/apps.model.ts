class App {
    _id:string;
    title: string;
    description: string;
    date: Date;
    imgUrl : String;
   
    constructor(){
        this._id = "";
        this.title = "";
        this.description = "";
        this.date = new Date();
        this.imgUrl = "";
    }
}

export default App;