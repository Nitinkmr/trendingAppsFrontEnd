class App {
    _id:string;
    title: string;
    description: string;
    date: Date;
   
    constructor(){
        this._id = "";
        this.title = "";
        this.description = "";
        this.date = new Date();
    }
}

export default App;