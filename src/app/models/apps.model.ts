class App {
    _id:string;
    name: string;
    description: string;
    date: Date;
    imgUrl : String;
    config :{draggable:false, row : Number, col: Number,sizex: Number, sizey: Number};
    package: string;

    constructor(){
        this._id = "";
        this.name = "";
        this.description = "";
        this.date = new Date();
        this.imgUrl = "";
        this.config = { draggable:false,row:1, col:1,sizex: 1, sizey: 1 };
        this.package = "";
    }
}

export default App;