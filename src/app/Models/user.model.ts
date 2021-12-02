export class UserModel {
    id? : number;
    name? : string;
    email? : string;
    password? : string;
    image? : string;

    constructor(id? : number, name? : string, email? : string, password? : string, image? : string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
    }
}