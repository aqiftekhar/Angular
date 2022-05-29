export class Recipe{
    public Name : string | undefined;
    public Description : string | undefined;
    public ImagePath : string | undefined;

    constructor(name : string, description : string, imagePath : string){
        this.Name = name;
        this.Description = description;
        this.ImagePath = imagePath
    }
}