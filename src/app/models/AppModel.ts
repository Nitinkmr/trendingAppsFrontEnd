export class AppModel {
    _id:string;
    name: string;
    description: string;
    date: Date;
    imgUrl : String;
    config :{draggable:false, row : Number, col: Number,sizex: Number, sizey: Number};
    package: string;
    devName : String;
    screenShotUrls :[]

    constructor(){
        this._id = "";
        this.name = "";
        this.description = "";
        this.date = new Date();
        this.imgUrl = "";
        this.config = { draggable:false,row:1, col:1,sizex: 1, sizey: 1 };
        this.package = "";
        this.devName = "";
        this.screenShotUrls =[];
    }
}

