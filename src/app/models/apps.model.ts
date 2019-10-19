class App {
    _id:string;
    name: string;
    description: string;
    date: Date;
    imgUrl : String;
    config :{ row : Number, col: Number,sizex: Number, sizey: Number};
    // row: Number;
    // col: Number;

    constructor(){
        this._id = "";
        this.name = "";
        this.description = "";
        this.date = new Date();
        this.imgUrl = "";
        this.config = { row:1, col:1,sizex: 1, sizey: 1 };
        // this.row = 1;
        // this.col = 1;
    }
}

export default App;