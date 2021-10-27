import { User } from "./user.model";

export class Story {

    storyTitle : string;
    storyCategory : string;
    storyAuthor : User;
    includesTrigger : boolean;

    storyImagePath ?: string; 
    storyText : string;

    constructor(title : string, cat : string, author : User, trigger : boolean, text : string) {

        this.storyTitle = title;
        this.storyCategory = cat;
        this.storyAuthor = author;
        this.includesTrigger = trigger;   
        this.storyText = text;    

    }
}