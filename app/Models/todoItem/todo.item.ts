/**
 * Created by bcui on 2/1/16.
 */
export class todoItem {
    constructor(public key : string, public name :string, public status : string = 'started') {   
    }
    
    public toggleStatus() {
        this.status = (this.status == "completed") ? "started" : "completed";
    }
}
