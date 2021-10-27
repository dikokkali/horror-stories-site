import { Story } from "./story.model";

export class User {

    //TODO: Separate credentials from front-facing data
    //userEmail : string;
    //userPassword : string;

    userNickname : string;
    userStories ?: Story[];

    constructor(nickname : string) {

        this.userNickname = nickname;

    }


}