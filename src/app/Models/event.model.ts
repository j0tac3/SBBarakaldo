export class EventModel {
    date? : string;
    title? : string;
    image? : string;
    desc? : string;
    expanded? : boolean;


/*     constructor() {
        
    }
 */
    constructor(date? : string, title? : string, image? : string, desc? : string, expanded? : boolean) {
        this.date = date;
        this.title = title;
        this.image = image;
        this.desc = desc;
        this.expanded = expanded;
    }
}