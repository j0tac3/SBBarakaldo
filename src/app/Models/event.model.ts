export class EventModel {
    id? : number;
    image? : string;
    title? : string;
    description? : string;
    sumary? : string;
    start? : string;
    end? : string;
    published? : boolean;
    finalized? : boolean;

    constructor(id? : number, image? : string, title? : string, description? : string, sumary? : string, start? : string, end? : string, published? : boolean, finalized? : boolean) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.sumary = sumary;
        this.start = start;
        this.end = end;
        this.published = published;
        this.finalized = finalized;
    }
}