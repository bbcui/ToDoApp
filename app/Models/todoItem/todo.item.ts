/**
 * Created by bcui on 2/1/16.
 */
export class todoItem {
    public _id:String
    constructor(public name :string, public status : string = 'started') {   
    }
    
    public toggleStatus() {
        this.status = (this.status == "completed") ? "started" : "completed";
    }
    getId(){
        return this._id;
    }
}
